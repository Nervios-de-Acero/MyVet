from django.db import models

# Create your models here.

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50, null=True)
    telefono = models.CharField(max_length=15)
    email = models.CharField(max_length=150)
    contrasena = models.CharField(max_length=15)
    dni = models.CharField(max_length=8)
    direccion = models.ForeignKey('Direccion', on_delete=models.CASCADE)

class TarjetaDePago(models.Model):
    id_tarjeta = models.AutoField(primary_key=True)
    nombre_titular = models.CharField(max_length=50)
    apellido_titular = models.CharField(max_length=50)
    dni_titular = models.CharField(max_length=8)
    fecha_vencimiento = models.DateTimeField()
    numero_tarjeta = models.CharField(max_length=18)
    codigo_seguridad = models.CharField(max_length=4)
    id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)