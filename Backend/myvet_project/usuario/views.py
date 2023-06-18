from rest_framework import status, generics
from rest_framework.views import APIView
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *


@api_view(['GET', 'POST'])
def usuario(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        serializer_usuario = UsuarioSerializer(usuarios, many=True)
        return render(request, 'usuario/usuario.html', {'usuarios': serializer_usuario.data})

    if request.method == 'POST':
        serializer_usuario = UsuarioSerializer(data=request.data)

        if serializer_usuario.is_valid():
            serializer_usuario.save()
            return render(request, 'usuario/usuario.html', {'usuarios': serializer_usuario.data})

        return render(request, 'usuario/usuario.html', {'error': serializer_usuario.errors})

# @api_view(['GET', 'POST'])
# def usuario(request):
#     if request.method == 'GET':
#         usuario = Usuario.objects.all()
#         serializer_usuario = UsuarioSerializer(usuario, many=True)
#         return render(request, 'usuario/usuario.html', {'usuarios': serializer_usuario.data})
    
#     if request.method == 'POST':
#         serializer_usuario = UsuarioSerializer(data=request.data)
        
#         if serializer_usuario.is_valid():
#             serializer_usuario.create(request.data)
#             return render(request, 'usuario/usuario.html', {'usuarios': serializer_usuario.data})
        
#         return render(request, 'usuario/usuario.html', {'error': serializer_usuario.errors})

# Create your views here.
# @api_view(['GET', 'POST'])
# def usuario(request):
    
#     if request.method == 'GET':
#         usuario = Usuario.objects.all()
#         serializer_usuario = UsuarioSerializer(usuario, many=True)
        
#         return Response(serializer_usuario.data)
   
#     if request.method == 'POST':
#         serializer_usuario = UsuarioSerializer(data=request.data)
        
#         if serializer_usuario.is_valid():
#             serializer_usuario.create(request.data)
#             return Response( serializer_usuario, status=status.HTTP_201_CREATED)
        
#         return Response(serializer_usuario.errors)


class RegistroView(generics.CreateAPIView):
    serializer_class = UsuarioSerializer



@api_view(['GET', 'PUT', 'DELETE'])
def usuario_details(request, pk):
    usuario = get_object_or_404(Usuario, pk=pk)

    if request.method == 'GET':
        ...


    if request.method == 'DELETE':
        usuario.delete()
        

    if request.method == 'PUT':
        
        serializer = UsuarioSerializer(data=request.data)

        if serializer.is_valid():
            usuario.nombre = request.data.get('nombre', usuario.nombre)
            usuario.apellido = request.data.get('apellido', usuario.apellido)
            usuario.email = request.data.get('email', usuario.email)
            usuario.telefono = request.data.get('telefono', usuario.telefono)
            usuario.contrasena = request.data.get('contraseña', usuario.contrasena)
            usuario.direccion = request.data.get('direccion', usuario.direccion)

            usuario.save()


    serializer = UsuarioSerializer(usuario)
    return Response(serializer.data)


