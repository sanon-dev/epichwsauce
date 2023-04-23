from django.db import models


class ParsedDocument(models.Model):
    document = models.ForeignKey('users.Document', on_delete=models.CASCADE)
    terms = models.TextField()