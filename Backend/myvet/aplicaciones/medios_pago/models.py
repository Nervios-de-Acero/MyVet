from django.db import models

# Create your models here.

class MedioPago(models.Model):
    id_pagos = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.tipo