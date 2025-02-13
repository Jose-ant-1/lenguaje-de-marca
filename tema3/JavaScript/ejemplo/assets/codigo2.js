const p = document.querySelector(".p1");
const image = document.querySelector(".image");
const b1 = document.querySelector(".b1");
const b2= document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const enc = document.querySelector("#enc");

b1.addEventListener("click", () =>{p.style.color="red"});

b2.addEventListener("click", () => image.src="./assets/sanchez.jpg");

b3.addEventListener("click", () => enc.classList.toggle("nueva"));







