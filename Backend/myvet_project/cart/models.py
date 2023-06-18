from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Cart(models.Model):
    user = models.ForeignKey('usuario.Usuario', on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart {self.pk} - User: {self.user.username}"

    def total_items(self):
        return self.cartitem_set.aggregate(total_items=models.Sum('quantity'))['total_items'] or 0

    def total_price(self):
        cart_items = self.cartitem_set.all()
        total = sum(item.total_price() for item in cart_items)
        return total

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey('productos.Producto', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"Cart: {self.cart.pk} - Product: {self.product.nombre_producto}"

    def total_price(self):
        return self.quantity * self.product.precio
