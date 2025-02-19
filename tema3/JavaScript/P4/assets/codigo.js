//primero, cuando entre, las letras pasan a color rojo, cuando salga vuelve a color negro
const primera=document.querySelector("#primera");
primera.addEventListener("mouseover", () =>primera.style.color="red");
primera.addEventListener("mouseleave", () =>primera.style.color="black");


//tercera, imagen, al pasar por encima cambia la imagen. No vuelve la anterior
<<<<<<< HEAD
const image = document.querySelector(".image");
image.addEventListener("mouseover", cambiaImagen);
=======
const tercera=document.querySelector("#tercera");
const image = document.querySelector(".image");
tercera.addEventListener("mouseover", cambiaImagen);
>>>>>>> 1a379c3c992d76b7b9156a638e68895f43395187


//quinta, comprobar si el numero está entre 1 y 100
const botonEdad = document.querySelector("#botonEdad");
const edad = document.querySelector("#input");
const mensaje = document.querySelector(".mensaje");
botonEdad.addEventListener("click", compruebaNumero);


//septima, cambiar color del fondo de negro a rojo
const button = document.querySelector("#boton");
let fondos = ["vacio1", "vacio2", "vacio3", "vacio4"];
button.addEventListener("click", cambiaFondos);


//novena, cambia el color según el estilo que se indique en cada botón
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
boton1.addEventListener("click", () => {novena.style.color = "white", novena.style.backgroundColor = "black"});
boton2.addEventListener("click", () => {novena.style.color = "black", novena.style.backgroundColor = "white"})
boton3.addEventListener("click", () => {novena.style.color = "red", novena.style.backgroundColor = "grey"})



//función que cambia los fondos de color de rojo a negro con un bucle
function cambiaFondos() {
    for (let i = 0; i < fondos.length; i++) {
        let elemento = document.getElementById(fondos[i]);
        if (elemento.style.backgroundColor === "red") {
            elemento.style.backgroundColor = "black";
        } else {
            elemento.style.backgroundColor = "red";
        }
    }
}

//comprueba que el numero inrtoducido sea correcto, cambiando el borde de color en función a si es correcto o no
function compruebaNumero() {
    let resul=parseInt(edad.value);
    mensaje.textContent = "";
    if(resul>=1 && resul <=100) {
        edad.style.borderColor = "green";
        mensaje.textContent = "El número introducido es válido";
    } else if (isNaN(resul)){
        edad.style.borderColor = "red";
        mensaje.textContent = "El dato introducido no es válido. Debe ser un número";
    } else {
        edad.style.borderColor = "red";
        mensaje.textContent = "El número introducido no es válido";
    }
}
//cambia la imagen cuando el raton pase por encima
function cambiaImagen() {
    const nombreImagen=image.src.split("/").pop();
    if(nombreImagen == "invisible.jpg") {
        image.src="./assets/robot.jpg";
    } else {
        image.src="./assets/invisible.jpg";
    }
}


