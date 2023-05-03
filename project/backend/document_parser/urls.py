from django.urls import path
from .views import DocumentParseView, ResourceListView

urlpatterns = [
    path('<int:document_id>/parse/', DocumentParseView.as_view(), name='document_parse'),
    path('resources/<int:parsed_document_id>/', ResourceListView.as_view(), name='get_resources'),
]
