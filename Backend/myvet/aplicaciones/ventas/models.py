from django.db import models
from aplicaciones.usuario.models import Usuario
from aplicaciones.productos.models import Producto


# Create your models here.

class Venta(models.Model):
    id_venta = models.AutoField(primary_key=True)
    fecha_venta = models.DateTimeField()
    estado = models.CharField(max_length=12)
    total = models.IntegerField()
    metodo_pago = models.ForeignKey('medios_pago.MedioPago', on_delete=models.CASCADE)
    id_usuario = models.ForeignKey('usuario.Usuario', on_delete=models.CASCADE)

    def __str__(self):
        return f'Venta {self.id_venta}'


class DetalleVenta(models.Model):
    id_detalle = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    id_venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    def __str__(self):
        return f'Detalle de venta: {self.id_detalle}'