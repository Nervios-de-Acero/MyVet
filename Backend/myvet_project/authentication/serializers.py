from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = Usuario
        fields = ['password', 'email', 'first_name', 'last_name', 'telefono', 'dni', 'direccion', 'avatar']

    def create(self, validated_data):
        password = validated_data.pop('password')
        hashed_password = make_password(password)  # Aplicar el algoritmo de hash a la contraseña

        user = Usuario.objects.create(password=hashed_password, **validated_data)
        return user


# from rest_framework import serializers
# from .models import *

# class UsuarioSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField(required=True)
#     first_name = serializers.CharField(required=True)
#     last_name = serializers.CharField(required=True)
#     password = serializers.CharField(min_length=8, write_only=True)
    
#     class Meta:
#         model = Usuario
#         fields = ['password','email', 'first_name', 'last_name', 'telefono', 'dni', 'direccion', 'avatar']


""" from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import *



class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    nombre = serializers.CharField(required=True)
    apellido = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    avatar = serializers.ImageField(required=False, allow_null=True)
   
    class Meta:
        model = get_user_model()
        fields = ('email', 'username','password', 'nombre', 'apellido', 'telefono', 'dni', 'direccion', 'avatar')
    
    def validate_password(self, value):
        return make_password(value)
    
    def validate_username(self, value):
        value = value.replace(" ", "")  # Ya que estamos borramos los espacios
        try:
            user = get_user_model().objects.get(username=value)
            # Si es el mismo usuario mandando su mismo username le dejamos
            if user == self.instance:
                return value
        except get_user_model().DoesNotExist:
            return value
        raise serializers.ValidationError("Nombre de usuario en uso")

    def validate_email(self, value):
        # Hay un usuario con este email ya registrado?
        try:
            user = get_user_model().objects.get(email=value)
        except get_user_model().DoesNotExist:
            return value
        # En cualquier otro caso la validación fallará
        raise serializers.ValidationError("Email en uso")

    def update(self, instance, validated_data):
        validated_data.pop('email', None)               # prevenimos el borrado
        return super().update(instance, validated_data)  # seguimos la ejecución

     
 """


""" def update(self, instance, validated_data):
    validated_data.pop('email', None)               # prevenimos el borrado
    return super().update(instance, validated_data)  # seguimos la ejecución """


""" class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True)
    username = serializers.CharField(
        required=True)
    password = serializers.CharField(
        min_length=8, write_only=True)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password')


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id_usuario', 'nombre', 'apellido', 'telefono', 'dni', 'direccion_id']
        read_only_fields = ('created_at',)


class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = ['id_direccion','calle', 'altura', 'piso','departamento', 'cod_postal', 'observaciones', 'usuario_id']
        read_only_fields = ('created_at',)
        
    def create(self, validated_data):
        direccion = Direccion.objects.create(**validated_data)
        direccion.save()
        return direccion



class TarjetaDePagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TarjetaDePago
        fields = ['id_tarjeta', 'nombre_titular', 'apellido_titular', 'dni_titular','fecha_vencimiento', 'numero_tarjeta', 'codigo_seguridad', 'id_usuario']
        read_only_fields = ('created_at',)
        
        def create(self, validated_data):
            tarjeta = TarjetaDePago.objects.create(**validated_data)
            tarjeta.save()
            return tarjeta """
