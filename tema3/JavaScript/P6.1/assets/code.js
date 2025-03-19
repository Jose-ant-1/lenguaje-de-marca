const boton = document.querySelector("#buscar");
const btnvalorar = document.querySelector("#valora");

boton.addEventListener("click", buscaPelicula);
btnvalorar.addEventListener("click", mostrarValoracion);

let valor = [];  //valoraciones de la película
let peliActual = "";  // nombre de la película

//buscar la película
async function buscaPelicula() {
    const peliABuscar = document.querySelector("#peliABuscar").value;
    const url = `https://www.omdbapi.com/?t=${peliABuscar}&apikey=6bd47da3`;

    const titulo = document.querySelector("#titulo");
    const anyo = document.querySelector("#anyo");
    const duracion = document.querySelector("#duracion");
    const medioSelect = document.querySelector("#medio");

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Verifica si la película fue encontrada y si tiene los datos
        if (data.Title == undefined || data.Year == undefined || data.Runtime == undefined) {
            titulo.innerHTML = "No se encontró película con ese nombre";
            anyo.innerHTML = "";
            duracion.innerHTML = "";
            medioSelect.innerHTML = `<option value="">Selecciona un medio</option>`; // Limpiamos las opciones del select
        } else {
            // Mostramos los datos de la película
            titulo.innerHTML = data.Title;
            anyo.innerHTML = data.Year;
            duracion.innerHTML = data.Runtime;
            peliActual = data.Title;  // Guardamos el nombre de la película

            if (data.Ratings && data.Ratings.length > 0) {
                valor = data.Ratings; // Guardamos las valoraciones
                let opcionesMedios = `<option value="">Selecciona un medio</option>`;
                data.Ratings.forEach(rating => {
                    opcionesMedios += `<option value="${rating.Source}">${rating.Source}</option>`;
                });
                medioSelect.innerHTML = opcionesMedios;
            } else {
                valor = [];  // No hay valoraciones disponibles
                medioSelect.innerHTML = `<option value="">No hay valoraciones disponibles</option>`;
            }
        }
    } catch (error) {
        titulo.innerHTML = "Ha sucedido un error";
        anyo.innerHTML = "";
        duracion.innerHTML = "";
    }
}

//mostrar la valoración seleccionada
function mostrarValoracion() {
    const medioSeleccionado = document.querySelector("#medio").value;
    const resultadoValoracion = document.querySelector("#resultValora");

    // Verificamos si seleccionó un medio
    if (!medioSeleccionado) {
        resultadoValoracion.innerHTML = "Por favor, selecciona un medio para mostrar la valoración.";
        return;
    }

    // Buscamos la valoración
    const valoracion = valor.find(rating => rating.Source === medioSeleccionado);
    if (valoracion) {
        resultadoValoracion.innerHTML = `El medio ${medioSeleccionado} ha valorado la película "${peliActual}" con un valor de ${valoracion.Value}.`;
    } else {
        resultadoValoracion.innerHTML = "No se encontró una valoración para el medio seleccionado.";
    }
}
