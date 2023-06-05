from django.contrib import admin
from django.urls import path
from .views import  *

urlpatterns = [
    path('', usuario, name='usuario'),
    path('<int:pk>', usuario_details, name='usuario_details'),
    path('registro/',
        RegistroView.as_view(), name='usuario_signup'),
]