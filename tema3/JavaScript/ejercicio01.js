const nombre = "Éxarion";
let nivel = 5;
let vida = 100;
const armaPrincipal = "Espada del Destino";
let armaSecundaria = "Arco simple";
let armadura = true;
console.log(`Estado del héroe:`);
console.log(`Nombre: ${nombre}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${vida}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Tiene armadura: ${armadura}`);

nivel++;
vida -= 30;
console.log(`Estado del héroe:`);
console.log(`Nombre: ${nombre}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${vida}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Tiene armadura: ${armadura}`);

let nivelCadena = nivel.toString();
let puntosFloat = parseFloat(vida);

console.log(`Nivel: ${nivelCadena}`);
console.log(`Puntos de vida: ${puntosFloat}`);

let danyoBase = 50;
let multCritico = 2;
let probCritico = 0.5; 
let EsCritico = probCritico > Math.random();

let variable = esCritico ? danyoBase * multCritico : danyoBase;
console.log("El heroe inflinge " + danyoBase + " puntos de daño porque es critico tiene valor " + EsCritico);

/**

console.log(`El heroe inflige ${danyoBase} puntos de daño porque es critico tiene valor` + esCritico);

let danyoBase = 50;
let multCritico = 2 ;
let probCritico = 0.5;
let esCritico = probCritico > Math.random();

let variable=esCritico ? danyoBase * multCritico : danyoBase;
 * 
 */
















