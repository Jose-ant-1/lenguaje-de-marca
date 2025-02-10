//creamos una constante por cada capa
const primera=document.querySelector("#primera");
const segunda=document.querySelector("#segunda");
const tercera=document.querySelector("#tercera");
const cuarta=document.querySelector("#cuarta");
const quinta=document.querySelector("#quinta");
const sexta=document.querySelector("#sexta");
const body=document.querySelector("body");

//esta muestra un mensaje al cargar la página
body.addEventListener("load",mensajeAlCargar());
//este es del primer cuadro, al hacer un click muestra un mensaje
primera.addEventListener("click",()=>alert("parrafo un click"));
//este es del segundo cuadro, cuando haces clic solicita 2 numeros validos
//muestra el numero máximo
segunda.addEventListener("click",SolicitarNumero);
//este es el tercer cuadro, cuando el raton deje la imagen 
//pedirá un número y dirá si es par o impar
tercera.addEventListener("mouseleave",parImpar)
//este es el cuarto cuadro, al hacer doble click muestra un mensaje
cuarta.addEventListener("dblclick",()=>alert("parrafo doble click"));
//este es el quinto cuadro, cuando se pulsa el botón
//muestra cuantas veces se ha pulsado
quinta.addEventListener("click",SumaBoton);
//este es el sexto cuadro, cuando pase por la capa
//multiplica 2 numeros que solicite
sexta.addEventListener("mouseover", multiplicaNumeros);
//esta es la función referente a mosrtar un mensaje cuando carga la pagina

//muestra un mensaje al cargar la página
function mensajeAlCargar(){
    alert("pagina cargada");
}
//solicita 2 numeros y dice cual es el mayor
function SolicitarNumero(){
    //pide primer numero
    const numero1 = prompt('Introduce el primer numero: ');
    //pide el segundonumero
    const numero2 = prompt('Introduce el segundo número: ');
    //comprueba si se introdujeron numeros
    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Dato introducido no es numero");
    } else {
        //comprueba cual es el mayor y lo muestra
        if (numero1 > numero2) {
            alert("el numero maximo es " + numero1);
        } else if (numero2 > numero1){
            alert("El numero maximo es " + numero2);
        } else {
            alert("los dos numeros son iguales");
        }
    }


}
//solicita 1 numero y dice si es par o impar
function parImpar(){
    const numero = prompt('Introduce un número');
    if (numero%2 == 0) {
        alert("El numero es par");
    } else {
        alert("el numero es impar");
    };
}
//contador de SumaBoton
let contador = 0;
//lleva un contador de las veces que se ha clicado un botón
function SumaBoton() {
    contador++;
    alert("Has pulsado el botón " + contador + " veces");
}
//solicita 2 números y lo multiplica
function multiplicaNumeros() {
    //solicita los números
    const numero1 = prompt('Introduce el primer numero: ');
    const numero2 = prompt('Introduce el segundo número: ');
    //los multiplica
    const resultado = numero1 * numero2;
    //muestra el resultado
    alert("El resultado de la multiplicacion es " + resultado);
}




