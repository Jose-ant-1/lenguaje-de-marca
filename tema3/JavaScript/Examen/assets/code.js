//tomamos el boton de buscar en la variable buscar
const buscar = document.querySelector("#buscar");
//hacemos un evento que busque la palabra
buscar.addEventListener("click", buscarPalabra);

async function buscarPalabra() {
    //tomamos el valor de la palabra que queremos buscar
    const palabraABuscar = document.querySelector("#palabra").value;
    //y ponemos la url que vamos a utilizar para buscar la palabra
    const url = ` https://rae-api.com/api/words/${palabraABuscar}`;
    //declaramos las variables y constantes que vamos a utilizar
    //aquí se guardará la definición
    const definicion = document.querySelector("#definicion");
    //aquí se guardará la palabra
    const palabra = document.querySelector("#palabraEncontrada");
    //aquí se guardará el origen de la palabra
    let origen;
    //aquí se guardará la palabra junto con su origen
    let palabraConOrigen;
    //aquí se guardaran los significados
    let significados = "";

    //hacemos un try catch para tomar los errores que puedan salir
    try {
        //usamos estas 2 lineas para poder buscar en la api con json
        const response = await fetch(url);
        const data = await response.json();
        //guardamos en origen el valor origen que tenga la palabra
        origen=data.data.meanings[0].origin.raw;        
        //guardamos en palabra con origen la palabra normal
        palabraConOrigen = data.data.word;
        //añadimos os parentesis y el origen
        palabraConOrigen += " (";
        palabraConOrigen += origen;
        palabraConOrigen += ")";
        //mostramos la palabra por pantalla
        palabra.innerHTML = palabraConOrigen;
        //cambiamos el color a verde
        palabra.style.color="green";
        //hacemos un bucle forEach para mostrar todos los valores de la palabra
        data.data.meanings[0].senses.forEach(def => {
            //guardamos el valor en la variable significados con formato de lista
            significados += `<li>${def.raw}</li>`;
        });
        //mostramos las definiciones
        definicion.innerHTML = significados;


    } catch (error) {
        //en caso de error se muestra el siguiente mensaje
        palabra.innerHTML = "Palabra no encontrada";
        //cambiamos el color a rojo
        palabra.style.color="red";
        definicion.innerHTML="";
    }
}

