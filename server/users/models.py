from django.db import models

# Create your models here.
class Users(models.Model):
    uid = models.BigAutoField(primary_key=True)
    firstName = models.TextField(max_length=100)
    lastName = models.TextField(max_length=100)
    username = models.TextField(max_length=100)
    password = models.TextField(max_length=100)

    def __str__(self):
        return self.name
