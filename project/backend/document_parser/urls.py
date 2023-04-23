from django.urls import path
from .views import DocumentParseView

urlpatterns = [
    path('<int:document_id>/parse/', DocumentParseView.as_view(), name='document_parse'),
]
