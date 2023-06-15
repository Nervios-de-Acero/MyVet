from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

""" 
@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass """

class CustomUserAdmin(UserAdmin):
    model = Usuario
    list_display = ['email', 'first_name', 'last_name', 'is_staff']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'telefono', 'dni', 'direccion', 'avatar')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'telefono', 'dni', 'direccion', 'avatar'),
        }),
    )

    ordering = ['email']
    
    def nombre(self, obj):
        return obj.first_name
    
    nombre.short_description = 'Nombre'


admin.site.register(Usuario, CustomUserAdmin)




""" from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.
@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass
 """


""" @admin.register(Usuario)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', Usuario.getEmail, 'telefono', 'dni', 'direccion_id', 'created_at')
    search_fields = ('nombre', 'apellido', Usuario.getEmail, 'telefono', 'dni', 'direccion_id')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('nombre', 'created_at')


@admin.register(TarjetaDePago)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('nombre_titular', 'apellido_titular', 'dni_titular','fecha_vencimiento', 'numero_tarjeta', 'codigo_seguridad', 'id_usuario' 'created_at')
    search_fields = ('nombre_titular', 'apellido_titular', 'dni_titular','fecha_vencimiento', 'numero_tarjeta', 'codigo_seguridad', 'id_usuario')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('nombre_titular', 'created_at')


@admin.register(Direccion)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('calle', 'altura', 'piso','departamento', 'cod_postal', 'observaciones', 'usuario_id', 'created_at')
    search_fields = ('calle', 'altura', 'piso','departamento', 'cod_postal', 'observaciones', 'usuario_id')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('calle', 'created_at') """