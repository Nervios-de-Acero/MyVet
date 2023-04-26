CREATE DATABASE myvet_ecommerce;

USE myvet_ecommerce;

CREATE TABLE usuario(
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

CREATE TABLE sucursales (
id_sucursales INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
direccion VARCHAR(100) NOT NULL,
ciudad VARCHAR(50) NOT NULL,
pais VARCHAR(50) NOT NULL,
telefono VARCHAR(20) NOT NULL
);

CREATE TABLE categorias (
id_categoria VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL
);

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

CREATE TABLE medios_pago (
id_pagos INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL
);
