from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.

def path_to_avatar(instance, filename): 
     return f'avatars/{instance.id}/{filename}'     


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'  # new
    REQUIRED_FIELDS = ['username', 'password']
    avatar = models.ImageField(upload_to= path_to_avatar, null=True, blank=True)
    
    def __str__(self):
        return self.username
 
    
""" class Usuario(models.Model):
    id_usuario = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='perfil')
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=15)
    dni = models.CharField(max_length=8)
    direccion = models.CharField(max_length=50)
 
    def getEmail(self):
        return f"{self.id_usuario.email}"
    
    class Meta:
         db_table = 'usuario' # Le doy de nombre 'usuario' a nuestra tabla en la Base de Datos
    
    
    def __str__(self):
         return "{} {} {} {} {}".format(self.nombre, self.apellido, self.telefono,
                                             self.dni, self.direccion) """
"""
class TarjetaDePago(models.Model):
    id_tarjeta = models.AutoField(primary_key=True)
    nombre_titular = models.CharField(max_length=50)
    apellido_titular = models.CharField(max_length=50)
    dni_titular = models.CharField(max_length=8)
    fecha_vencimiento = models.DateTimeField()
    numero_tarjeta = models.CharField(max_length=18)
    codigo_seguridad = models.CharField(max_length=4)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    class Meta:
         db_table = 'tarjetas' # Le doy de nombre 'tarjetas' a nuestra tabla en la Base de Datos
    
    def __str__(self):
        return "{} {} {} {} {} {} {}".format(self.nombre_titular, self.apellido_titular, self.dni_titular, self.fecha_vencimiento, self.numero_tarjeta, self.codigo_seguridad, self.id_usuario)

class Direccion(models.Model):
    id_direccion = models.AutoField(primary_key=True)
    calle = models.CharField(max_length=50)
    altura = models.CharField(max_length=5)
    piso = models.CharField(max_length=2, blank=True, null=True)
    departamento = models.CharField(max_length=1, blank=True, null=True)
    cod_postal = models.CharField(max_length=4)
    observaciones = models.TextField(blank=True, null=True)
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    class Meta:
         db_table = 'direccion' # Le doy de nombre 'direccion' a nuestra tabla en la Base de Datos
    
    def __str__(self):
        return "{} {} {} {} {} {} {}".format(self.calle, self.altura, self.piso, self.departamento, self.cod_postal, self.observaciones, self.id_usuario) 
"""