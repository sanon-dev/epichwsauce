from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    bio = models.TextField()
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)

class Document(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    document_data = models.BinaryField()

    def __str__(self):
        return self.title