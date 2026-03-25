import ProductoModel from "../models/productoModel.js";
import ProductoView from "../views/productoView.js";

class ProductoController {

    constructor(){
        this.model = new ProductoModel();
        this.view = new ProductoView();
    }

    iniciar(){
        let productos = this.model.obtenerProductos();
        this.view.mostrarProductos(productos);
    }

    agregarProducto(){
        let producto = {
            nombre: prompt("Nombre"),
            categoria: prompt("Categoría"),
            precio: prompt("Precio"),
            stock: prompt("Stock")
        };

        this.model.guardarProducto(producto);
        this.iniciar();
    }

}

export default ProductoController;