function limpiar(){
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const imagen = document.querySelector("[data-imagen]");

    if(nombre){
        nombre.value="";
    }
    if (precio) {
        precio.value="";
    }
    if (imagen) {
        imagen.value= "";
    }
    

}