from datetime import date
from itertools import product
from typing import List


class Usuario:
    def __init__(self, id_usuario, nombre, apellido, telefono, email, dni, contraseña, direccion, deseados, favoritos, carrito, tarjetas, metodosdepago):
        self.id_usuario = id_usuario
        self.nombre = nombre
        self.apellido = apellido
        self.telefono = telefono
        self.email = email
        self.dni = dni
        self.contraseña = contraseña
        self.direccion = direccion
        self.deseados = deseados
        self.favoritos = favoritos
        self.carrito = carrito
        self.tarjetas = tarjetas
        self.metodosdepago = metodosdepago
        
    def getNombre(self):
        return self.nombre
    
    def setNombre(self, nombre):
        self.nombre = nombre
        
    def getEmail(self):
        return self.email
    
    def setEmail(self, email):
        self.email = email
        
    def getPassword(self):
        return self.contraseña
    
    def setPassword(self, password):
        self.contraseña = password
        
    def removeUsuario(self):
        # código para eliminar el usuario de la base de datos
        
    def addTarjeta(self, tarjeta):
        self.tarjetas.append(tarjeta)
        
    def setTarjeta(self, indice, tarjeta):
        self.tarjetas[indice] = tarjeta
        
    def getTarjeta(self, indice):
        return self.tarjetas[indice]
        
    def removeTarjeta(self, indice):
        del self.tarjetas[indice]
        
    def addToCarrito(self, producto):
        self.carrito.append(producto)
        
    def removeFromCarrito(self, producto):
        self.carrito.remove(producto)
        
    def addToDeseados(self, producto):
        self.deseados.append(producto)
        
    def removeFromDeseados(self, producto):
        self.deseados.remove(producto)
        
    def addToFavoritos(self, producto):
        self.favoritos.append(producto)
        
    def removeFromFavoritos(self, producto):
        self.favoritos.remove(producto)
        
    def getCantidadProductos(self, producto, cantidad):
        # código para actualizar la cantidad de un producto en el carrito del usuario
        
    def setContraseña(self, nuevaContraseña):
        self.contraseña = nuevaContraseña

class Categoria:
    def __init__(self, nombre, descripcion):
        self.nombre = nombre
        self.descripcion = descripcion
        
    def getNombre(self):
        return self.nombre
    
    def setNombre(self, nombre):
        self.nombre = nombre
        
    def createDescripcion(self):
        return input("Ingrese una descripción: ")
        
    def getDescripcion(self):
        return self.descripcion
    
    def setDescripcion(self, descripcion):
        self.descripcion = descripcion

class Main:
    def __init__(self):
        self.usuarios = {}
        self.sucursales = {}
        self.metodoDePago = {}
        self.catalogoTienda = {}
        self.categorias = {}

    def createNombre(self):
        return input("Ingrese un nombre: ")
    
    def getNombre(self):
        return self.nombre
    
    def setNombre(self, nombre):
        self.nombre = nombre
        
    def removeNombre(self, nombre):
        del self.nombre
        
    def createDescripcion(self):
        return input("Ingrese una descripción: ")
    
    def getDescripcion(self):
        return self.descripcion
    
    def setDescripcion(self, descripcion):
        self.descripcion = descripcion
        
    def removeDescripcion(self, descripcion):
        del self.descripcion


class Tarjeta:
    def __init__(self, id_tarjeta, id_usuario, nombre_titular, apellido_titular, dni_titular, exp_mes, exp_anio, numero_tarjeta, codigo_seguridad):
        self.id_tarjeta = id_tarjeta
        self.id_usuario = id_usuario
        self.nombre_titular = nombre_titular
        self.apellido_titular = apellido_titular
        self.dni_titular = dni_titular
        self.exp_mes = exp_mes
        self.exp_anio = exp_anio
        self.numero_tarjeta = numero_tarjeta
        self.codigo_seguridad = codigo_seguridad
        
    def getNumero(self):
        return self.numero_tarjeta
    
    def setNumero(self, value):
        self.numero_tarjeta = value
    
    def getTitular(self):
        return f"{self.nombre_titular} {self.apellido_titular}"
    
    def setTitular(self, value):
        nombre, apellido = value.split()
        self.nombre_titular = nombre
        self.apellido_titular = apellido
    
    def getExp_mes(self):
        return self.exp_mes
    
    def setExp_mes(self, value):
        self.exp_mes = value
        
    def getExp_anio(self):
        return self.exp_anio
    
    def setExp_anio(self, value):
        self.exp_anio = value
    
    def getCvv(self):
        return self.codigo_seguridad
    
    def setCvv(self, value):
        self.codigo_seguridad = value
    
    def eliminarTarjeta(self):
        self.id_tarjeta = None
        self.id_usuario = None
        self.nombre_titular = None
        self.apellido_titular = None
        self.dni_titular = None
        self.exp_mes = None
        self.exp_anio = None
        self.numero_tarjeta = None
        self.codigo_seguridad = None


#from usuario import Usuario
#from producto import Producto

class Compra:
    def __init__(self, compra_id: int, fecha: date, tarjeta: int, tipoTarjeta: str, estado: str, producto: List[product], nombreTitular: str, fechaVencimiento: date, codigoSeguridad: str, usuario: Usuario):
        self.compra_id = compra_id
        self.fecha = fecha
        self.monto_total = self.setMontoTotal(producto)
        self.tarjeta = tarjeta
        self.tipoTarjeta = tipoTarjeta
        self.estado = estado
        self.producto = producto
        self.nombreTitular = nombreTitular
        self.fechaVencimiento = fechaVencimiento
        self.codigoSeguridad = codigoSeguridad
        self.usuario = usuario

    def getOrdenDeCompra(self):
        return self.compra_id

    def setOrdenDeCompra(self, ordenCompra):
        self.compra_id = ordenCompra

    def getTipoTarjeta(self):
        return self.tipoTarjeta

    def setTipoTarjeta(self, tipoTarjeta):
        self.tipoTarjeta = tipoTarjeta

    def getNombreTitular(self):
        return self.nombreTitular

    def setNombreTitular(self, nombreTitular):
        self.nombreTitular = nombreTitular

    def getFechaVencimiento(self):
        return self.fechaVencimiento

    def setFechaVencimiento(self, fechaVencimiento):
        self.fechaVencimiento = fechaVencimiento

    def getCodigoSeguridad(self):
        return self.codigoSeguridad

    def setCodigoSeguridad(self, codigoSeguridad):
        self.codigoSeguridad = codigoSeguridad

    def getUsuario(self):
        return self.usuario

    def getEstado(self, estado: str):
        return self.estado

    def setEstado(self, estado: str):
        self.estado = estado

    def getProducto(self, producto: id.producto):
        return self.producto

    def removeProducto(self, producto: id.producto):
        self.producto.remove(producto)

    def setMontoTotal(self, producto: List[id.producto]) -> float:
        total = 0
        for prod in producto:
            total += prod.precio
        return total


class Producto:
    def __init__(self, id_producto, nombre, descripcion, precio, marca, cantidad, categoria, imagen, fecha_ingreso=None, fecha_modificacion=None):
        self.id_producto = id_producto
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.marca = marca
        self.cantidad = cantidad
        self.categoria = categoria
        self.imagen = imagen
        self.fecha_ingreso = fecha_ingreso if fecha_ingreso is not None else date.today()
        self.fecha_modificacion = fecha_modificacion if fecha_modificacion is not None else date.today()

    def getNombre(self):
        return self.nombre

    def setNombre(self, nombre):
        self.nombre = nombre

    def getPrecio(self):
        return self.precio

    def setPrecio(self, precio):
        self.precio = precio

    def getCantidad(self):
        return self.cantidad

    def setCantidad(self, cantidad):
        self.cantidad = cantidad

    def getDescripcion(self):
        return self.descripcion

    def setDescripcion(self, descripcion):
        self.descripcion = descripcion


class Catalogotienda:
    def __init__(self):
        self.lista_producto = []

    def agregar_producto(self, producto: Producto):
        self.lista_producto.append(producto)

    def buscar_producto(self, id_producto: int) -> Producto:
        for producto in self.lista_producto:
            if producto.id_producto == id_producto:
                return producto
        return None

    def eliminar_producto(self, id_producto: int):
        producto = self.buscar_producto(id_producto)
        if producto is not None:
            self.lista_producto.remove(producto)

    def mostrar_catalogo(self):
        for producto in self.lista_producto:
            print(producto.id_producto, producto.nombre, producto.precio)

    def getLista_producto(self) -> List[Producto]:
        return self.lista_producto

    def setLista_producto(self, value: List[Producto]):
        self.lista_producto = value

class MetodosDePago:
    def __init__(self):
        self.lista_metodos = []
    
    def agregarMetodo(self, id_medio: int) -> None:
        self.lista_metodos.append(id_medio)
    
    def buscarMetodo(self, id_medio: int):
        for medio in self.lista_metodos:
            if medio.id_producto == id_medio:
                return medio
        return None
    
    def eliminarMetodo(self, id_medio: int) -> None:
        medio = self.buscarMetodo(id_medio)
        if medio is not None:
            self.lista_metodos.remove(medio)
    
    def getMetodo(self) -> List[Medio]:
        return self.lista_metodos

class Sucursal:
    def __init__(self, id_sucursal: int, nombre: str, direccion: str, ciudad: str, pais: str, telefono: int):
        self.id_sucursal = id_sucursal
        self.nombre = nombre
        self.direccion = direccion
        self.ciudad = ciudad
        self.pais = pais
        self.telefono = telefono
        self.stock = []

    def getNombre(self) -> str:
        return self.nombre

    def setNombre(self, nombre: str) -> None:
        self.nombre = nombre

    def getDireccion(self) -> str:
        return self.direccion

    def setDireccion(self, direccion: str) -> None:
        self.direccion = direccion

    def getStock(self) -> list:
        return self.stock
