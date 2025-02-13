const p1=document.querySelector(".niidea");
const b=document.querySelector("body");
const p2=document.querySelector("#niidea2");
p1.addEventListener("click",()=>alert("parrrafo 1 click"));
b.addEventListener("load",mensaje());
p2.addEventListener("dblclick",()=>alert("parrafo 2 clicks"))

function mensaje(){
    alert("pagina cargada")
};








