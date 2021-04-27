//----------------------------------CLASES----------------------------------//
class Producto {
    constructor(datos) {
        this.id = datos.id;
        this.name = datos.name;
        this.image = datos.image,
        this.talle= datos.talle;
        this.valor= datos.valor;
        this.cantidad = 1;
    }
    addCantidad() {
        this.cantidad++;
    }
    getTotal() {
        return (this.cantidad * this.precio);
    }
}

const APPDATA = [{

    "id": 1,
    "name": "Chelsy",
    "image": "/IMGS/chombaPolo.jpg",
    "talle": "XL",
    "cantidad": 1,
    "valor": 1500
  }, {
    "id": 2,
    "name": "Stevy",
    "image": "/IMGS/camisaMarco.jpg",
    "talle": "XL",
    "cantidad": 1,
    "valor": 3000
  }, {
    "id": 3,
    "name": "Vick",
    "image": "/IMGS/chombaPurpure.jpg",
    "talle": "L",
    "cantidad": 1,
    "valor": 2500
  }, {
    "id": 4,
    "name": "Silas",
    "image": "IMGS/chombaGeorge.jpg",
    "talle": "XXL",
    "cantidad": 1,
    "valor": 2000
  }, {
    "id": 5,
    "name": "Timothea",
    "image": "/IMGS/chombaNewPort.jpg",
    "talle": "M",
    "cantidad": 1,
    "valor": 1000
  }, {
    "id": 6,
    "name": "Sherwynd",
    "image": "/IMGS/camisaXin.jpg",
    "talle": "XL",
    "cantidad": 1,
    "valor": 2753
  }]