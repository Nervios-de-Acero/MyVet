from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
""" class Direccion(models.Model):
    id_direccion = models.AutoField(primary_key=True)
    calle = models.CharField(max_length=50)
    altura = models.CharField(max_length=5)
    piso = models.CharField(max_length=2, blank=True, null=True)
    departamento = models.CharField(max_length=1, blank=True, null=True)
    cod_postal = models.CharField(max_length=4)
    observaciones = models.TextField(blank=True, null=True)
    id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)

    class Meta:
        db_table = "direccion"
        verbose_name = "Direccion"
        verbose_name_plural = "Direcciones"

    def __str__(self):
        return f'{self.calle} {self.altura}' """


class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=15)
    email = models.CharField(max_length=150)
    contrasena = models.CharField(max_length=15)
    dni = models.CharField(max_length=8)
    direccion = models.CharField(max_length=50)

    class Meta:
        db_table = "usuario"
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        
    def __str__(self):
        return self.nombre

