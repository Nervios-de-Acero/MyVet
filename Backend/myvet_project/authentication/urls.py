from django.urls import path, include
from .views import *


urlpatterns = [
    # Auth views
    path('login/',
         LoginView.as_view(), name='auth_login'),

    path('logout/',
         LogoutView.as_view(), name='auth_logout'),
    
    path('signup/',
         SignupView.as_view(), name='auth_signup'),
     
    path('reset/',
         include('django_rest_passwordreset.urls',
                 namespace='password_reset')),
    
     path('usuarios/',
         ListarUsuarios.as_view(), name='listar_usuarios'),
    
    # Profile views
    path('user/profile/',
         ProfileView.as_view(), name='user_profile'), 
    
     path('updateUser/',
         UpdateUserView.as_view(), name='auth_update') 
]