//creamos una constante por cada capa
const primera=document.querySelector("#primera");
const vacios=document.querySelector("#vacio1");
const tercera=document.querySelector("#tercera");
const quinta=document.querySelector("#quinta");
const body=document.querySelector("body");
const image = document.querySelector(".image");
const button = document.querySelector("#boton");

//primero, cuando entre, las letras pasan a color rojo, cuando salga vuelve a color negro
primera.addEventListener("mouseover", () =>primera.style.color="red");
primera.addEventListener("mouseleave", () =>primera.style.color="black");
//tercera, imagen, al pasar por encima cambia la imagen. No vuelve la anterior
tercera.addEventListener("mouseover", () =>image.src="./assets/robot.jpg");
tercera.addEventListener("mouseleave", () =>image.src="./assets/invisible.jpg");

//septima, cambiar color del fondo de negro a rojo
button.addEventListener("click", () => {vacios.classList.toggle("activo")});

//novena




