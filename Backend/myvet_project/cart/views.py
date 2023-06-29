from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializer import CartSerializer
from .models import Cart

# Create your views here.

""" def cart_view(request):
    cart = Cart.objects.get(user=request.user)
    cart_items = cart.items.all()
    return render(request, 'cart.html', {'cart_items': cart_items}) """
    

class CartListView(ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer