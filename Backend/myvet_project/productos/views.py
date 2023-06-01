from django.shortcuts import render,redirect
from .forms import ProductosForm
from .models import Producto

# Create your views here.
def productos_list(request):
    productos = Producto.objects.all()  
    context = {
        'productos_list': productos
    }
    return render(request, "productos/productos_list.html", context)

# def productos_list(request):
#     context = {'productos_list' : Producto.objects.all()}
#     return render(request, "productos/productos_list.html",context)

# def productos_form(request, id=0):
#     if request.method == "GET":
#         if id == 0:
#             form = ProductosForm()
#         else:
#             productos = Producto.objects.get(pk=id)
#             form = ProductosForm(instance=productos)
#         return render(request, "productos/productos_form.html", {"form":form})
#     else:
#         form = ProductosForm(request.POST)
#         if form.is_valid():
#             form.save()
#         return redirect('/productos/list')
    
# def productos_delete(request):
#     return 



