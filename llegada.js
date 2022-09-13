let mostrar = async()=>{
    let peticion = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let dato = await peticion.json();
    return dato;
    
}

addEventListener("message", async(e)=>{
    console.log("Los datos llegaron al destino");
    postMessage({api: await mostrar(), formulario: e.data});

    
})