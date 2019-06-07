/* Acá va tu código */
/*let intentos = 0;

function validar() {*/


const verificar = document.getElementById("verificar");
verificar.addEventListener("click",()=>{
  document.getElementById("pantalla1").classList.add("hide");
  document.getElementById("pantalla2").classList.remove("hide");
});
