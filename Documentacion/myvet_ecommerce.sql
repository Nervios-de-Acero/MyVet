CREATE DATABASE myvet_ecommerce;

USE myvet_ecommerce;



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
