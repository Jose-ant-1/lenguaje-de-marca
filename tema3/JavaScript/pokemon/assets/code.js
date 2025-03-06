const boton = document.querySelector("#buscar");

boton.addEventListener("click", buscarPokemon);

async function buscarPokemon(){

    const nombreABuscar = document.querySelector("#nombreABuscar").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreABuscar}`;

    const nombre = document.querySelector("#nombre");
    const imagen = document.querySelector("#imagen");
    const altura = document.querySelector("#altura");
    const tipo = document.querySelector("#tipo");

    try {
        const response = await fetch(url);

        const data = await response.json();

        nombre.innerHTML= data.name;
        imagen.src=data.sprites.front_default;
        altura.innerHTML=data.height;
        data.types.forEach(Element =>{
            tipo.innerHTML=tipo.innerHTML+`<li>${Element.type.name}</li>`;
        });
        


    } catch (error) {
        imagen.src="";
        tipo.innerHTML=``;
        altura.innerHTML=``;
        nombre.innerHTML=`<p> No se pudo encontrar el pokemon </p>`;
        nombre.error("Error al obtener los datos", error);
    }



}









