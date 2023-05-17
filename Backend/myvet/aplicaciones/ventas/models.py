from django.db import models

# Create your models here.

class Venta(models.Model):
    id_venta = models.AutoField(primary_key=True)
    fecha_venta = models.DateTimeField()
    estado = models.CharField(max_length=12)
    total = models.IntegerField()
    metodo_pago = models.CharField(max_length=12)
    id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)

class DetalleVenta(models.Model):
    id_detalle = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey('Productos', on_delete=models.CASCADE)
    id_venta = models.ForeignKey('Venta', on_delete=models.CASCADE)
    cantidad = models.IntegerField()