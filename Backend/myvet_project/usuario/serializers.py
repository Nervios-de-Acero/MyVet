from rest_framework import serializers
from .models import *


class UsuarioSerializer(serializers.Serializer):
    id_usuario = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField()
    apellido = serializers.CharField()
    telefono = serializers.CharField()
    email = serializers.CharField()
    contrasena = serializers.CharField()
    dni = serializers.CharField()
    direccion = serializers.CharField()

    def create(self, data):
        return Usuario.objects.create(
            nombre=data['nombre'],
            apellido=data['apellido'],
            telefono=data['telefono'],
            email=data['email'],
            contrasena=data['contrasena'],
            dni=data['dni'],
            direccion=data['direccion'],
        )

    
    