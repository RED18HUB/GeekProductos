
async function listaProductos(){
    const conexion =await fetch("http://localhost:3002/productos");
    const conexionConvertida=conexion.json();
    console.log(conexion);
    console.log("jola")
    return conexionConvertida
}

async function crearNuevoProducto( nombre,precio,imagen)
{
    const conexion =  await fetch("http://localhost:3002/productos",{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
        })

    });

    const conexionConvertida=conexion.json();
    return conexionConvertida;

}

async function eliminarProducto(id){
    const conexion =await fetch("http://localhost:3002/productos/${id}",{
        method:"DELETE",
        headers:{'Content-Type':'application/json'}
    });
    if(!conexion.ok) throw new Error('No se pudo eliminar el producto');

    const data = await conexion.json();
    console.log(data);
    return data;
}

export const conexion={
    listaProductos,
    crearNuevoProducto,
    eliminarProducto
}