//creamos una constante por cada capa
const primera=document.querySelector("#primera");
const tercera=document.querySelector("#tercera");
const quinta=document.querySelector("#quinta");
const body=document.querySelector("body");
const image = document.querySelector(".image");
const button = document.querySelector("#boton");
const botonEdad = document.querySelector("#botonEdad");
const edad = document.querySelector("#input");
let fondos = ["vacio1", "vacio2", "vacio3", "vacio4"];
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");

//primero, cuando entre, las letras pasan a color rojo, cuando salga vuelve a color negro
primera.addEventListener("mouseover", () =>primera.style.color="red");
primera.addEventListener("mouseleave", () =>primera.style.color="black");
//tercera, imagen, al pasar por encima cambia la imagen. No vuelve la anterior
tercera.addEventListener("mouseover", cambiaImagen);
//quinta, comprobar si el numero está entre 1 y 100
botonEdad.addEventListener("click", compruebaNumero);
//septima, cambiar color del fondo de negro a rojo
button.addEventListener("click", cambiaFondos);
//novena
boton1.addEventListener("click", () => {novena.style.color = "white", novena.style.backgroundColor = "black"});
boton2.addEventListener("click", () => {novena.style.color = "black", novena.style.backgroundColor = "white"})
boton3.addEventListener("click", () => {novena.style.color = "red", novena.style.backgroundColor = "grey"})

function cambiaFondos() {
    for(i in fondos) {

    }
}

function compruebaNumero() {
    let resul=parseInt(edad.value);
    if(resul>=1 && resul <=100) {
        alert("El número es válido");
    } else {
        alert("El número no es válido");
    }
}

function cambiaImagen() {
    const nombreImagen=image.src.split("/").pop();
    if(nombreImagen == "invisible.jpg") {
        image.src="./assets/robot.jpg";
    } else {
        image.src="./assets/invisible.jpg";
    }
}


