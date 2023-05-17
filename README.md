# Grupo TSDWAD 2022

## Introducción al proyecto: 
Se trata de una aplicación en la cual los usuarios podrán crear una cuenta que les facilitará ver el historial clínico de su mascota, seguir un calendario de vacunación y desparasitación, sacar turno en alguna veterinaria cercana a su domicilio con la posibilidad de elegir el/la médico/a veterinario/a. Contará con cartillas de especialidades y mapa de direcciones para saber en dónde pueden tratar a su mascota en caso de necesitar algún tratamiento especial, o simplemente ubicar la locación más cercana en caso de querer adquirir algún producto, ya sea alimento, piedras, ropa, juguetes, etc. 


#### Integrantes :rocket:

- [Noelia Rivas Aguirre](http://github.com/Noeeelia "Noelia Rivas Aguirre")
- [Paula Leyes](http://github.com/PaulaLeyes "Paula Leyes")
- [Lorena Aylen Gil](http://github.com/Loreaylen "Lorena Aylen Gil")
- [Florencia Itatí Ríos](http://github.com/FlorenciaItati "Florencia Itatí Ríos")
- [Jeremias Uriel Diaz](http://github.com/Uriel-98 "Jeremias Uriel Diaz")
- [Santiago Peironi](https://github.com/santipeironi "Santiago Peironi")
- [Emilia Rodríguez Moreno](http://github.com/MundoViolento "Emilia Rodríguez Moreno")
- [Hernán Rodrigo Torres](http://github.com/HernanRT "Hernán Rodrigo Torres")
- [Yanina Soledad Unrein](http://github.com/Yanina-Unrein "Yanina Soledad Unrein")

-------------  

## Documentacion
#### blue_book: Backend
Basandonos en las tablas que tenemos en la base de datos MySQL,  organizamos la aplicación Django en diferentes apps para una mejor modularidad y mantenibilidad. A continuacion esta detallado cómo estructuramos las apps en Django:

1.usuarios: Esta app se encargará de todo lo relacionado con los usuarios, como el registro, inicio de sesión, gestión de perfiles, etc. Aquí se definen los modelos relacionados con los usuarios y su información personal, como Usuario y TarjetaDePago.

2.productos: Esta app se encargará de la gestión de productos. Aquí se definen los modelos relacionados con los productos y las categorías, como Producto, Categoria, ProductoCategoria, Sucursales y ProductoSucursales.

3.ventas: Esta app se encargará de la gestión de las ventas. Aquí se definen los modelos relacionados con las ventas y el detalle de las mismas, como Venta y DetalleVenta.

4.catalogo: Esta app se encargará de mostrar la vista del catálogo de productos. Aquí se definen las vistas y plantillas necesarias para mostrar la lista de productos, así como las funcionalidades de búsqueda y filtrado.

5.medios_pago: Esta app se encargará de gestionar los métodos de pago disponibles. Aquí se definen el modelo MediosPago para almacenar los diferentes métodos de pago y sus descripciones.

