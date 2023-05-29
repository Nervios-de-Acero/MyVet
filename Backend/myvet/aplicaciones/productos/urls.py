from django.urls import path
from django.urls import include
from . import views

urlpatterns= [
    path('', views.producto_form)
    path('list/', views.producto_list)
    path('productos/', include("productos.urls"))
]