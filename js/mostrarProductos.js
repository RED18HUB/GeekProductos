import { conexion } from "./conexion.js";
const lista= document.querySelector("[data-productos]");



function crearProductos(imagen,nombre, precio,id) {
    const producto = document.createElement("li");
    producto.setAttribute('data-id', id); 
    producto.className = "lista_producto";
    producto.innerHTML = `
    <img src="${imagen}" alt="imagen"> 
    
    <p>${nombre}</p>
    <div class="button-with-icon ">
    <p class="precio__boton">$ ${precio}</p>
    <button class="btn btn--primary boton-eliminar" data-id="${id}" ></button>
    </div>
    `;

    const botonEliminar = producto.querySelector('.boton-eliminar');
    botonEliminar.addEventListener('click', function() {
        const idProducto = this.getAttribute('data-id');
        console.log('ID del producto:', idProducto);
        producto.remove(); 
        eliminarProducto(idProducto);
        
        
    });
        
  

return producto;
}

async function eliminarProducto(id) {
    try {
        // Envía una solicitud DELETE al servidor para eliminar el producto de la base de datos
        const conexion = await fetch(`http://localhost:3002/productos/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!conexion.ok) {
            throw new Error('No se pudo eliminar el producto del servidor');
        }
        const data = await conexion.json();
        console.log('Producto eliminado del servidor:', data);
    } catch (error) {
        console.error('Error al eliminar el producto del servidor:', error);
        // Aquí puedes manejar el error de eliminación del producto del servidor, por ejemplo, mostrar un mensaje al usuario
    }
}



async function listarProductos(){
    const listaApi =  await conexion.listaProductos();
    listaApi.forEach(producto=>lista.appendChild(crearProductos(producto.imagen,producto.nombre,producto.precio,producto.id)));
}



listarProductos();
