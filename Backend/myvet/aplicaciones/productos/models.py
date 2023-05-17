from django.db import models

# Create your models here.

class Productos(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre_producto = models.CharField(max_length=50)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    marca = models.CharField(max_length=50, null=True)
    cantidad = models.IntegerField()
    categoria = models.CharField(max_length=50)
    imagen_url = models.CharField(max_length=100)
    fecha_ingreso = models.DateField()
    fecha_modificacion = models.DateField(null=True)
    activo = models.BooleanField(default=True)

class Sucursales(models.Model):
    id_sucursales = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    telefono = models.CharField(max_length=20)

class Categorias(models.Model):
    id_categoria = models.CharField(max_length=50, primary_key=True)
    descripcion = models.TextField()

class ProductoCategoria(models.Model):
    id_producto_categoria = models.AutoField(primary_key=True)
    id_categoria = models.ForeignKey('Categorias', on_delete=models.CASCADE)
    id_producto = models.ForeignKey('Productos', on_delete=models.CASCADE)

class ProductoSucursales(models.Model):
    id_producto_sucursales = models.AutoField(primary_key=True)
    id_sucursales = models.ForeignKey('Sucursales', on_delete=models.CASCADE)
    id_producto = models.ForeignKey('Productos', on_delete=models.CASCADE)
    stock = models.IntegerField()