from django.shortcuts import render
from .models import Cart

# Create your views here.

def cart_view(request):
    cart = Cart.objects.get(user=request.user)
    cart_items = cart.items.all()
    return render(request, 'cart.html', {'cart_items': cart_items})