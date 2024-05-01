import { conexion } from "./conexion.js";  

const formulario=document.querySelector("[data-formulario]");

async function crearProducto(evento)
{
    evento.preventDefault();
    const nombre =document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen=document.querySelector("[data-imagen]").value;

    await conexion.crearNuevoProducto(nombre,precio,imagen);
    window.location.href('./index.html')
}


formulario.addEventListener("submit",evento => crearProducto(evento));