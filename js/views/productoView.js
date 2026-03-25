class ProductoView {

    mostrarProductos(productos){
        let tabla = document.querySelector("tbody");
        tabla.innerHTML = "";

        productos.forEach(p => {
            tabla.innerHTML += `
                <tr>
                    <td>${p.nombre}</td>
                    <td>${p.categoria}</td>
                    <td>${p.precio}</td>
                    <td>${p.stock}</td>
                </tr>
            `;
        });
    }

}

export default ProductoView;