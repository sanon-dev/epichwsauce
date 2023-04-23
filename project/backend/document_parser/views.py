from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import io
from PyPDF2 import PdfFileReader

from .models import ParsedDocument
from users.models import Document


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

        # Split the text into words and count the frequency of each word
        stop_words = ['the', 'an', 'a', 'of']
        words = text.split()
        freq = {}
        for word in words:
            if word not in stop_words:
                if word not in freq:
                    freq[word] = 0
                freq[word] += 1

        # Sort the words by frequency and return the top 10 most frequent words
        sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)
        top_words = [word for word, freq in sorted_words[:10]]

        # Save the parsed document to the database
        parsed_document = ParsedDocument(document=document, terms=', '.join(top_words))
        parsed_document.save()

        return Response({'terms': top_words}, status=status.HTTP_201_CREATED)
