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

atuendo.push("Armadura de escamas");
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
    return Math.min(vida + CURACION, VIDA_MAX);
}

vida = curar(vida, CURACION);

