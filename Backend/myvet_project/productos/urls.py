from django.urls import path
from . import views

app_name = 'productos'

urlpatterns = [
    
    path('', views.productos_list),#get and post req. for insert operation
   
]