let form = document.querySelector("#miFormulario");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let fileJs = new Worker(`${form.action}`);
    fileJs.postMessage(data);
    fileJs.addEventListener("message", (event)=>{
        console.log(event.data);
        fileJs.terminate();
    })
    
});