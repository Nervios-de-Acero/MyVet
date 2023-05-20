import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
productos: ProductModel[] = []

  ngOnInit(): void {
    this.productos = [
      {
        id: 1,
        nombre_producto: "Piedra calefactora para terrario N°2",
        descripcion: "Piedra calefactora de primera calidad para terrarios. Mantiene la temperatura tibia y constante, ideal para el animal. Medidas: 30 x 19 cm.",
        precio: 1699.99,
        marca: "New Pet",
        categoria: ["peceras", "accesorios"],
        tipo_animal: "exoticos",
        imagen_url: "https://naturallife.vtexassets.com/arquivos/ids/155455-300-300?v=1764900520&width=300&height=300&aspect=true"
      },
      {
      id: 2,
      nombre_producto: "Juguete Para Cachorros Zeus Mojo Trp/ Rope Ring 16 Cm",
      descripcion: "Set de tres aros de caucho y cuerda entrelazados para cachorros",
      precio: 1250.00,
      marca: "Zeus Mojo",
      categoria: ["accesorios"],
      tipo_animal: "perro",
      imagen_url:"https://catycanar.vtexassets.com/arquivos/ids/164262-600-auto?v=637786422765670000&width=600&height=auto&aspect=true"
      },
      {
        id: 3,
        nombre_producto: "Pro Plan Gato Adulto X 7.5 Kg",
        descripcion: "Purina Pro Plan con OptiPrebio es un alimento balanceado para gatos adultos de 1 a 7 años de edad. Ayuda a optimizar la digestión mediante la correcta absorción de nutrientes; promueve la salud e higiene oral de tu mascota mediante la reducción del sarro dental; también protege la salud del tracto urinario y, al contener pollo fresco como uno de sus principales ingredientes, provee una fuente ideal de proteínas y aminoácidos.",
        precio: 17145,
        marca: "Purina",
        categoria: ["alimentos"],
        tipo_animal: "gato",
        imagen_url: "https://catycanar.vtexassets.com/arquivos/ids/155443-800-auto?v=637732963243970000&width=800&height=auto&aspect=true"
      }
      
    ]
  }
  }