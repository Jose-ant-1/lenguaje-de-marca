let dificultad = 2;
let xpActual = 90;
let xpGanada = 30;
let xpNextLevel = 100;
let nivel = 2;
let vida = 60;
const VIDA_MAX = 100;
const CURACION = 30;

if ((xpActual+xpGanada) > xpNextLevel) {
    console.log(`¡Has subido de nivel!`)
    nivel++;
    console.log(`Nivel actual ${nivel}`);
    xpActual = 0;
    xpGanada = 0;
}

let monedas = [1,5,3,6,2];
let atuendo = ['Duende','Arquero','Caballero','Mago'];
let contadorMonedas = 0;

for(let elemento of monedas) {
    contadorMonedas += elemento;
}
console.log(`El heroe consiguió ${contadorMonedas} monedas`);
console.log(`-----------------------------`);
console.log(`El heroe tiene los siguiente atuendos: `)
for(let elemento of atuendo) {
    console.log(elemento);
}

function curar(vida, CURACION) {
    if (vida + CURACION <= VIDA_MAX) {
        vida += CURACION;
        alert (`El heroe se recuperó. Ahora tiene ${vida} puntos de vida`);    
    } else {
        vida = 100;
        alert (`El heroe se recuperó. Ahora tiene ${vida} puntos de vida`);
    }
}

console.log(curar);











