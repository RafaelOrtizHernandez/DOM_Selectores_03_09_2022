

let mostrar = async()=>{
    let peticion = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean");
    let dato = await peticion.json();
    return dato;
    
}

addEventListener("message", async(e)=>{
    console.log("Los datos llegaron al destino");
    postMessage({api: await mostrar(), formulario: e.data});

    
})