from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import io
from PyPDF2 import PdfFileReader

from .models import ParsedDocument, Resource
from users.models import Document
from openai_integration.openai import get_resources


class DocumentParseView(APIView):
    def post(self, request, document_id):
        document = get_object_or_404(Document, id=document_id)
        if not document.document_data:
            return Response({'error': 'Document does not have data to parse.'}, status=status.HTTP_400_BAD_REQUEST)

        # Open the PDF document in memory
        pdf_data = io.BytesIO(document.document_data.read())
        pdf_reader = PdfFileReader(pdf_data)

        # Extract the text from the document
        text = ''
        for page in range(pdf_reader.getNumPages()):
            text += pdf_reader.getPage(page).extractText()

        # Pass the parsed text to OpenAI to get resources
        resources = get_resources(text)

        # Save the parsed document and resources to the database
        parsed_document = ParsedDocument(document=document, terms=', '.join(resources))
        parsed_document.save()

        # Save the resources to the database
        for resource in resources:
            resource = Resource(parsed_document=parsed_document, title=resource['title'], url=resource['url'])
            resource.save()

        return Response({'resources': resources}, status=status.HTTP_201_CREATED)

class ResourceListView(APIView):
    def get(self, request, parsed_document_id):
        resources = Resource.objects.filter(parsed_document_id=parsed_document_id)
        serialized_resources = []
        for resource in resources:
            serialized_resources.append({'title': resource.title, 'url': resource.url})
        return Response(serialized_resources)

