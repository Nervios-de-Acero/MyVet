from django.db import models


# Create your models here.

class Categoria(models.Model):
    id_categoria = models.CharField(primary_key=True, max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.id_categoria


class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre_producto = models.CharField(max_length=50)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    marca = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)
    tipo_animal = models.CharField(max_length=50)
    imagen_url = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre_producto


class Sucursal(models.Model):
    id_sucursal = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre


class ProductoCategoria(models.Model):
    id_producto_categoria = models.AutoField(primary_key=True)
    id_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)

    def __str__(self):
        return f'Producto: {self.id_producto}, Categoría: {self.id_categoria}'


class ProductoSucursal(models.Model):
    id_producto_sucursales = models.AutoField(primary_key=True)
    id_sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    stock = models.IntegerField()

    def __str__(self):
        return f'Producto: {self.id_producto}, Sucursal: {self.id_sucursal}'