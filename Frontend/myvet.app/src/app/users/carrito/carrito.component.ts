import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/productos.model';
import { ProductosService } from '../../../servicios/productos.service';
//import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
//import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //public payPalConfig ? : IPayPalConfig;
  quantity: number = 0;
  productosSeleccionados: ProductModel[] = [];
  contieneProducto: boolean = false;
  productosEnCarrito: ProductModel[] = [];

  constructor(public productosService: ProductosService) {}


  
  ngOnInit(): void {
    //this.initConfig();
    this.obtenerProductosEnCarrito();
  }

  /* private initConfig(): void {
    this.payPalConfig = {
        currency: 'ARS',
        clientId: 'sb',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'ARS',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'ARS',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'ARS',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any)=> {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            

        },
        onError: err => {
            console.log('OnError', err);
            
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            
        }
    };
} */

  obtenerProductosEnCarrito(): void {
    this.productosEnCarrito = this.productosService.obtenerCarrito();
    this.verificarProductosEnCarrito();
  }

  verificarProductosEnCarrito(): void {
    this.contieneProducto = this.productosEnCarrito.length > 0;
    console.log('contieneProducto:', this.contieneProducto);
  }


  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  eliminarProducto(producto: ProductModel): void {
    const indice = this.productosService.obtenerCarrito().indexOf(producto);
    if (indice !== -1) {
      this.productosService.obtenerCarrito().splice(indice, 1);
    }

    // Llamar al método para actualizar la cantidad de productos en el navbar
    this.productosService.actualizarCantidadProductos();
    this.verificarProductosEnCarrito();
  }
  
}

