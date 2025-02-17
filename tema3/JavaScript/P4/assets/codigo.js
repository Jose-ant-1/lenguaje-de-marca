//creamos una constante por cada capa
const primera=document.querySelector("#primera");
const tercera=document.querySelector("#tercera");
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
//novena, cambiar el estilo según diga el botón 
boton1.addEventListener("click", () => {novena.style.color = "white", novena.style.backgroundColor = "black"});
boton2.addEventListener("click", () => {novena.style.color = "black", novena.style.backgroundColor = "white"})
boton3.addEventListener("click", () => {novena.style.color = "red", novena.style.backgroundColor = "grey"})
//función que cambia el color del fondo de negro a rojo y viceversa
function cambiaFondos() {
    //hacemos un bucle para recorrer todo el array de los fondos que queremos cambiar
    for (let i = 0; i < fondos.length; i++) {
        //guardamos en una variable el cuadro que vamos a cambiar
        let elemento = document.getElementById(fondos[i]);
        //si este es de color negro, pasa a rojo
        if (elemento.style.backgroundColor === "black") {
            elemento.style.backgroundColor = "red";
        //en caso contrario, pasa a negro
        } else {
            elemento.style.backgroundColor = "black";
        }
    }
}
//función que comprueba si el numero está dentro del rango
function compruebaNumero() {
    let resul=parseInt(edad.value);
    //si lo está, devuelve el mensaje indicandolo
    if(resul>=1 && resul <=100) {
        alert("El número es válido");
    //si no, manda el mensaje diciendo que no es válido
    } else {
        alert("El número no es válido");
    }
}
//función que cambia la imagen
function cambiaImagen() {
    //guardamos en una variable el nombre de la imagen
    let nombreImagen=image.src.split("/").pop();
    //comprobamos si es una u otra, si es la de invisible, pasa a ser el robot
    if(nombreImagen == "invisible.jpg") {
        image.src="./assets/robot.jpg";
    //en caso contrario, pasa a ser la de invisible
    } else {
        image.src="./assets/invisible.jpg";
    }
}



