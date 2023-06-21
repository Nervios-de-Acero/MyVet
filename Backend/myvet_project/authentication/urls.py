from django.urls import path, include
from .views import *
from . import views


urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='user-register'),
    path('logout/', views.UserLogoutView.as_view(), name='user-logout'),
    path('logout-success/', TemplateView.as_view(template_name='logout_success.html'), name='logout-success'),
    path('users/', views.UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    path('users/<int:pk>/update/', views.UserDetailView.as_view(), name='user-update'),
    path('home/', views.HomeView.as_view(), name='home'),
    path('login/', views.UserLoginView.as_view(), name='user-login'),  
     path('login-success/', LoginSuccessView.as_view(), name='login-success'),
]






""" from django.urls import path, include
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
] """