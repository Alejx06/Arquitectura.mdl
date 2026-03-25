class ProductoModel {

    obtenerProductos(){
        return JSON.parse(localStorage.getItem("productos")) || [];
    }

    guardarProducto(producto){
        let productos = this.obtenerProductos();
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    }

}

export default ProductoModel;