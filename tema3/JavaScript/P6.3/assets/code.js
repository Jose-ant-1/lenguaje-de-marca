const boton = document.querySelector("#buscar");

boton.addEventListener("click", buscarPesronaje);

async function buscarPesronaje(){

    const nombreABuscar = document.querySelector("#personaje").value.toLowerCase();
    const url = `https://rickandmortyapi.com/api/character/${nombreABuscar}`;

    const nombre = document.querySelector("#nombre");
    const especie = document.querySelector("#especie");
    const genero = document.querySelector("#genero");
    const img = document.querySelector("#imagen");
    const episodio = document.querySelector("#episodios");

    try {
        const response = await fetch(url);

        const data = await response.json();

        nombre.innerHTML=data.name;
        especie.innerHTML=data.species;
        genero.innerHTML=data.gender;
        img.src=data.image;
        episodio.innerHTML=data.episode.length;
        if (data.gender == "male") {
            body.style.color == "blue";
        } else {
            body.style.color == "pink";
        }

    } catch (error) {
        imagen.src="";
        tipo.innerHTML=``;
        altura.innerHTML=``;
        nombre.innerHTML=`<p> No se pudo encontrar el pokemon </p>`;
        nombre.error("Error al obtener los datos", error);
    }



}









