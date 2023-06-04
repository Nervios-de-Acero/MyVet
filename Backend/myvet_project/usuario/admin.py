from django.contrib import admin
from .models import *

# Register your models here.

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'telefono', 'email', 'contrasena', 'dni', 'direccion')
    


admin.site.register(Usuario, UsuarioAdmin)