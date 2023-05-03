from django.db import models
from django.contrib.auth.hashers import make_password

class Profile(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    bio = models.TextField(null=True)
    
    def save(self, *args, **kwargs):
        if not self.id:
            self.password = make_password(self.password)
        super(Profile, self).save(*args, **kwargs)

class Document(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    document_data = models.BinaryField()

    def __str__(self):
        return self.title