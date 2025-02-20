
const num1=document.querySelector("#num1");
const num2=document.querySelector("#num2");
const operacion=document.querySelector("#opcion");
const calcular=document.querySelector("#calcular");
const resultado=document.querySelector("#resultado");



calcular.addEventListener("click", operar);

parseFloat(num1)

/**
 * debe tomar la operación que va a hacer desde el option
 * con calcular.value en un switch y comparar las opciones que hay, suma, resta...
 */


function operar(){
    if(isNaN(num1) || isNaN(num2)) {
        resultado.value = "adsfasdfasd"
    }

}



