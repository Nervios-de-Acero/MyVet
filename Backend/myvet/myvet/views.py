from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import Producto

class ProductoListView(ListView):
    model = Producto
    template_name = 'producto_list.html'  # Plantilla para mostrar la lista de productos

class ProductoCreateView(CreateView):
    model = Producto
    fields = ['nombre', 'descripcion', 'precio']
    template_name = 'producto_form.html'  # Plantilla para el formulario de creación
    success_url = '/productos/'  # URL de redirección después de la creación exitosa

class ProductoUpdateView(UpdateView):
    model = Producto
    fields = ['nombre', 'descripcion', 'precio']
    template_name = 'producto_form.html'  # Plantilla para el formulario de actualización
    success_url = '/productos/'  # URL de redirección después de la actualización exitosa

class ProductoDeleteView(DeleteView):
    model = Producto
    template_name = 'producto_confirm_delete.html'  # Plantilla para la confirmación de eliminación
    success_url = '/productos/'  # URL de redirección después de la eliminación exitosa
