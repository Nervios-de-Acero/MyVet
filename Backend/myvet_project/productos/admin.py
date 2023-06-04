from django.contrib import admin
from .models import Categoria
from .models import Producto

# Register your models here.

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre_categoria', 'descripcion')


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre_producto', 'descripcion', 'precio', 'marca', 'id_categoria', 'tipo_animal', 'imagen_url')
    fields = ['nombre_producto', 'descripcion', ('precio', 'marca'), 'id_categoria', 'tipo_animal', 'imagen_url']
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)