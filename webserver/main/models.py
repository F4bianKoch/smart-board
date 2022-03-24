from django.db import models

class Members(models.Model):
    fname = models.CharField(max_length=200)
    lname = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    passwort = models.CharField(max_length=50)
    age = models.IntegerField()

# Create your models here.
