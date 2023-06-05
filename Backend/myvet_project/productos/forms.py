from django import forms
from .models import Producto, Categoria

class ProductosForm(forms.ModelForm):
    categoria = forms.ModelChoiceField(queryset=Categoria.objects.all())


    class Meta:
        model = Producto
        fields = "__all__"
    

    def __init__(self, *args, **kwargs):
        super(ProductosForm, self).__init__(*args, **kwargs)
        self.fields["categoria"].empty_label = "Select"