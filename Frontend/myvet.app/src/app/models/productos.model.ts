export interface ProductModel {
  id: number,
  nombre_producto: string,
  descripcion: string,
  precio: number,
  marca: string,
  categoria: string[],
  tipo_animal: string,
  imagen_url: string
}