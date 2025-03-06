const boton = document.querySelector("#buscar");

boton.addEventListener("click", buscaPelicula);


async function buscaPelicula() {
    const peliABuscar = document.querySelector("#peliABuscar").value;
    const url = `https://www.omdbapi.com/?t=${peliABuscar}&apikey=6bd47da3`;

    const titulo = document.querySelector("#titulo");
    const anyo = document.querySelector("#anyo");
    const duracion = document.querySelector("#duracion");

    try{
        const response = await fetch(url);
        const data = await response.json();
        
        titulo.innerHTML=data.Title;
        anyo.innerHTML=data.Year;
        duracion.innerHTML=data.Runtime;

    }catch (error) {
        titulo.innerHTML="No se encontró pelicula con ese nombre";
        anyo.innerHTML="";
        duracion.innerHTML="";
    }



}

