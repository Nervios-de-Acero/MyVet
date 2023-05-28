CREATE DATABASE myvet_ecommerce;

USE myvet_ecommerce;

<<<<<<< HEAD:Documentacion/myvet_ecommerce.sql
=======
CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50),
telefono VARCHAR(15) NOT NULL,
email VARCHAR(150) NOT NULL,
contrasena VARCHAR(15) NOT NULL,
dni VARCHAR(8) NOT NULL,
direccion VARCHAR(50) NOT NULL,
FOREIGN KEY (direccion) REFERENCES direccion (id_direccion)
);

CREATE TABLE direccion (
id_direccion INT PRIMARY KEY AUTO_INCREMENT,
calle VARCHAR(50) NOT NULL,
altura VARCHAR(5) NOT NULL,
piso VARCHAR(2),
departamento CHAR(1),
cod_postal CHAR(4) NOT NULL,
observaciones TEXT,
id_usuario INT NOT NULL,
FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE tarjeta_de_pago(
id_tarjeta INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre_titular VARCHAR(50) NOT NULL,
apellido_titular VARCHAR(50) NOT NULL,
dni_titular VARCHAR(8) NOT NULL,
fecha_vencimiento DATETIME NOT NULL,
numero_tarjeta VARCHAR(18) NOT NULL,
codigo_seguridad VARCHAR(4) NOT NULL,
id_usuario INT NOT NULL,
FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE productos(
id_producto INT PRIMARY KEY AUTO_INCREMENT,
nombre_producto VARCHAR(50) NOT NULL,
descripcion TEXT,
precio DECIMAL (10,2) NOT NULL,
marca VARCHAR(50),
cantidad INT NOT NULL,
categoria VARCHAR(50),
tipo_animal VARCHAR(50),
imagen_url VARCHAR(100),
fecha_ingreso DATE NOT NULL,
fecha_modificacion DATE,
activo BIT DEFAULT 1
);

CREATE TABLE sucursales (
id_sucursales INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
direccion VARCHAR(100) NOT NULL,
ciudad VARCHAR(50) NOT NULL,
pais VARCHAR(50) NOT NULL,
telefono VARCHAR(20) NOT NULL
);
>>>>>>> Develop:Backend/myvet_ecommerce.sql


CREATE TABLE producto_categoria (
  id_producto_categoria INT NOT NULL AUTO_INCREMENT KEY,
  id_categoria INT NOT NULL,
  id_producto INT NOT NULL,
  FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria),
  FOREIGN KEY (id_producto) REFERENCES productos (id_producto)
);
CREATE TABLE detalle_venta (
  id_detalle INT PRIMARY KEY AUTO_INCREMENT,
  id_producto INT NOT NULL,
  id_venta INT NOT NULL,
  cantidad INT NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES productos (id_producto),
  FOREIGN KEY (id_venta) REFERENCES venta (id_venta)
);
