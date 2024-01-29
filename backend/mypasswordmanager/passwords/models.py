from django.db import models
from django_cryptography.fields import encrypt

class Customer(models.Model):
    user = models.CharField(max_length=200, primary_key=True)
    password = encrypt(models.CharField(max_length=200))
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)


class Pass(models.Model):
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    website = models.CharField(max_length=200)
    password = encrypt(models.CharField(max_length=200))
