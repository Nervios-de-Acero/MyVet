from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib import messages
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.views import APIView
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django_rest_passwordreset.signals import reset_password_token_created
from django.contrib.auth.forms import AuthenticationForm
from .models import *
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import TemplateView
import stripe
import clavesStripe



class UserRegistrationView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UsuarioSerializer

    def get(self, request):
        return render(request, 'authentication/registration_form.html')

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return render(request, 'authentication/registration_success.html') 
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HomeView(APIView):
    def get(self, request):
        return render(request, 'authentication/home.html')
  
  
class UserLoginView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        return render(request, 'authentication/login.html')

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            refresh = RefreshToken.for_user(user)

            # Guardar el token de acceso en la sesión del usuario
            request.session['access_token'] = str(refresh.access_token)

            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return render(request, 'authentication/login.html', {'error': 'Credenciales inválidas'})   

# class UserLoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             refresh = RefreshToken.for_user(user)
#             return render(request, 'authentication/login_success.html', {'refresh': str(refresh), 'access': str(refresh.access_token)})  # Renderizar el template de inicio de sesión exitoso
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LoginSuccessView(APIView):
    def get(self, request):
        return render(request, 'authentication/login_success.html')
    

class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token = request.data.get('refresh_token')
        token = RefreshToken(refresh_token)
        token.blacklist()
        return render(request, 'authentication/logout_success.html')  # Renderizar el template de cierre de sesión exitoso

def logout_view(request):
    logout(request)
    return redirect('logout-success')

class UserListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = Usuario.objects.all()
        serializer = UsuarioSerializer(users, many=True)
        context = {'users': serializer.data}
        return render(request, 'authentication/user_list.html', context)



class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        user = self.get_object(pk)
        serializer = UsuarioSerializer(user)
        context = {'user': user, 'user_id': user.id}  # Asegura que el contexto incluya 'user' y 'user.id'
        return render(request, 'authentication/user_detail.html', context)
        
    def put(self, request, pk):
        user = self.get_object(pk)
        serializer = UsuarioSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return redirect('user-update-success', pk=user.pk)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserUpdateSuccessView(TemplateView):
    template_name = 'authentication/user_update_success.html'
    

class CrearClienteView(APIView):
    def post(self, request):
        stripe.api_key = clavesStripe.STRIPE_SECRET_KEY
        email = request.data.get('email')
        nombre = request.data.get('nombre')
        direccion = request.data.get('direccion')

        try:
            # Crear un cliente en Stripe
            customer = stripe.Customer.create(
                email=email,
                name=nombre,
                address={
                    'line1': direccion,
                }
            )
            # Obtener el usuario existente
            try:
                usuario = Usuario.objects.get(email=email)
            except Usuario.DoesNotExist:
                return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

            # Actualizar el campo stripe_customer_id del usuario
            usuario.stripe_customer_id = customer.id
            usuario.save()

            return Response({'cliente_id': customer.id}, status=status.HTTP_201_CREATED)
        except stripe.error.StripeError as e:
            # Manejar errores de Stripe
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ProcesarPagoView(APIView):
    def post(self, request):
        cliente_id = request.data.get('stripe_customer_id')
        cantidad = request.data.get('cantidad')
        descripcion = request.data.get('descripcion')

        try:
            # Crear un cargo en Stripe
            charge = stripe.Charge.create(
                amount=int(cantidad) * 100,  # Convertir el monto a centavos
                currency='usd',
                description=descripcion,
                customer=cliente_id
            )
            return Response({'charge_id': charge.id}, status=status.HTTP_201_CREATED)
        except stripe.error.StripeError as e:
            # Manejar errores de Stripe
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
# class UserRegistrationView(generics.CreateAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = UsuarioSerializer

#     def post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UserLoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             }, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
# class UserLogoutView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         refresh_token = request.data.get('refresh_token')
#         token = RefreshToken(refresh_token)
#         token.blacklist()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# class UserListView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         users = Usuario.objects.all()
#         serializer = UsuarioSerializer(users, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

# class UserDetailView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get_object(self, pk):
#         try:
#             return Usuario.objects.get(pk=pk)
#         except Usuario.DoesNotExist:
#             raise status.HTTP_404_NOT_FOUND

#     def get(self, request, pk):
#         user = self.get_object(pk)
#         serializer = UsuarioSerializer(user)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     def put(self, request, pk):
#         user = self.get_object(pk)
#         serializer = UsuarioSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)












""" from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib import messages
from django.shortcuts import redirect, render
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.views import APIView
from .serializers import *

from django.dispatch import receiver
from django_rest_passwordreset.signals import reset_password_token_created

class LoginView(APIView):   
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            # Si no es correcto devolvemos un error en la petición
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)
        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)


class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer
 
    
@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    # Aquí deberíamos mandar un correo al cliente...
    print(
        f"\nRecupera la contraseña del correo '{reset_password_token.user.email}' usando el token '{reset_password_token.key}' desde la API http://localhost:8000/api/auth/reset/confirm/.\n\n"

        f"También puedes hacerlo directamente desde el cliente web en http://localhost:3000/new-password/?token={reset_password_token.key}.\n")

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated] #Solo usuarios logueados pueden ver.
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
        
class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)

class UpdateUserView(APIView):
    permission_classes = [IsAuthenticated]
    
    def patch(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        
        if serializer.is_valid():
            # Si se envía una nueva contraseña, la actualizamos explícitamente
            password = request.data.get('password')
            if password:
                user.set_password(password)
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 """


"""     def perform_create(self, serializer):
        user = serializer.save()
        usuario_data = self.request.data.get('usuario', {})
        Usuario.objects.create(user=user, **usuario_data) """
        

"""
class UsuarioViewSet(viewsets.ModelViewSet):    
    
    queryset = Usuario.objects.all().order_by('id')
    serializer_class = UsuarioSerializer
"""