from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.db import models


# Create your models here.

def path_to_avatar(instance, filename): 
     return f'avatars/{instance.id}/{filename}'     

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email debe ser proporcionado')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)
    
    
class Usuario(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('Email',max_length = 255, unique = True,)
    first_name = models.CharField('Nombre', max_length = 50, blank = True, null = True)
    last_name = models.CharField('Apellido', max_length = 50, blank = True, null = True)
    telefono = models.CharField(max_length=20, null=True, blank=True)
    dni = models.CharField(max_length=8, null=True, blank=True)
    direccion = models.CharField(max_length=50, null=True, blank=True)
    avatar = models.ImageField(upload_to= path_to_avatar, null=True, blank=True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    list_display = ('email','first_name', 'last_name', 'telefono', 'DNI','direccion', 'avatar')

    USERNAME_FIELD = 'email'  # new
    REQUIRED_FIELDS = ['password']

    def __str__(self):
        return f'{self.first_name} {self.last_name}'





""" from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.

def path_to_avatar(instance, filename): 
     return f'avatars/{instance.id}/{filename}'     


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'  # new
    REQUIRED_FIELDS = ['username','password']
    nombre = models.CharField(max_length=50,  blank=True)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=15,  null=True)
    dni = models.CharField(max_length=8, null=True)
    direccion = models.CharField(max_length=255, null=True)
    avatar = models.ImageField(upload_to= path_to_avatar, null=True, blank=True)
    
    def __str__(self):
        return "{} {} {} {} {} {}".format(self.nombre, self.apellido, self.telefono,
                                             self.dni, self.direccion, self.avatar)
 

    
     """

"""     class Usuario(models.Model):
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
                                                self.dni, self.direccion)  """


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