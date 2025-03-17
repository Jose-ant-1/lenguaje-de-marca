const btn = document.querySelectorAll(".boton");
const mostrar = document.querySelector(".mostrar");
const borrar = document.querySelector(".borrar");
const op = document.querySelectorAll(".op");
const result = document.querySelector(".result");

let operacion = ""; //operación 
let op1 = ""; // Primer numero
let op2 = ""; // Segundo numero

// bucle para los numeros
btn.forEach(button => {
    button.addEventListener("click", () => {
        if (operacion != "") {
            op2 += button.textContent;
            mostrar.value = op2;
        } else {
            op1 += button.textContent;
            mostrar.value = op1;
        }
    });
});

// bucle para las operaciones
op.forEach(operator => {
    operator.addEventListener("click", () => {
        if (op1 !== "" && op2 == "") {
            operacion = operator.textContent;
        } else if (op1 != "" && op2 != "") {
            calcula(); // Calcula el resultado 
            operacion = operator.textContent;
        }
    });
});

// evento para el boton de calcular el resultado (=)
result.addEventListener("click", () => {
    if (op1 != "" && operacion != "" && op2 != "") {
        calcula();
    }
});

// Función que calcula
function calcula() {
    let resultado = 0; // Variable para almacenar el resultado
    const num1 = parseFloat(op1); // Convierte op1 a número
    const num2 = parseFloat(op2); // Convierte op2 a número

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "x":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Error"; // Maneja división entre 0
            break;
        default:
            resultado = "Error";
            break;
    }
    mostrar.value = resultado; // Muestra el resultado
    op1 = resultado.toString(); // Guarda el resultado en el primer número por si sigue operando con lo que había ya
    op2 = "";
    operacion = "";
}

// evento para borrar todo (C)
borrar.addEventListener("click", () => {
    op1 = "";
    op2 = "";
    operacion = "";
    mostrar.value = "";
});
