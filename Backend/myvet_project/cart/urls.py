from django.urls import path, include
from .views import *


urlpatterns = [
    path('carrito/', CartListView.as_view(), name='cart-list'),
]