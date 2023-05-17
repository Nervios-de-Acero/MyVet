from django.db import models

# Create your models here.

class MediosPago(models.Model):
    id_pagos = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=50)
    descripcion = models.TextField()