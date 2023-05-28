from django.db import models


# Create your models here.

class Direccion(models.Model):
    id_direccion = models.AutoField(primary_key=True)
    calle = models.CharField(max_length=50)
    altura = models.CharField(max_length=5)
    piso = models.CharField(max_length=2, blank=True, null=True)
    departamento = models.CharField(max_length=1, blank=True, null=True)
    cod_postal = models.CharField(max_length=4)
    observaciones = models.TextField(blank=True, null=True)
    id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.calle} {self.altura}'


class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=15)
    email = models.CharField(max_length=150)
    contrasena = models.CharField(max_length=15)
    dni = models.CharField(max_length=8)
    direccion_usuario = models.ForeignKey(Direccion, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class TarjetaDePago(models.Model):
    id_tarjeta = models.AutoField(primary_key=True)
    nombre_titular = models.CharField(max_length=50)
    apellido_titular = models.CharField(max_length=50)
    dni_titular = models.CharField(max_length=8)
    fecha_vencimiento = models.DateTimeField()
    numero_tarjeta = models.CharField(max_length=18)
    codigo_seguridad = models.CharField(max_length=4)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f'Tarjeta de {self.nombre_titular}'