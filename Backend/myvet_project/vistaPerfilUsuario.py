"""
authentication/views.py


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']


authentication/urls.py


from .views import LoginView, LogoutView, SignupView, ProfileView  # edited

urlpatterns = [

    # ...

    # Profile views
    path('user/profile/',
         ProfileView.as_view(), name='user_profile'),
]

authentication/views.py


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']

    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user

def update(self, instance, validated_data):
    validated_data.pop('email', None)               # prevenimos el borrado
    return super().update(instance, validated_data)  # seguimos la ejecución

authentication/serializers.py


# ...

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

"""