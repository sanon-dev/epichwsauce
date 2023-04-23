from django.urls import path
from .views import create_profile, DocumentUploadView

urlpatterns = [
    path('api/profiles/', create_profile, name='create_profile'),
    path('upload/', DocumentUploadView.as_view(), name='document_upload'),
]
