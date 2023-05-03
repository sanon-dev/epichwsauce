from django.db import models


class ParsedDocument(models.Model):
    document = models.ForeignKey('users.Document', on_delete=models.CASCADE)
    terms = models.TextField()

class Resource(models.Model):
    parsed_document = models.ForeignKey('ParsedDocument', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    url = models.URLField()

    def __str__(self):
        return self.title