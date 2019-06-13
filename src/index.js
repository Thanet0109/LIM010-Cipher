/* Acá va tu código */
const verificar = document.getElementById("verificar");
let intentos = 0;
verificar.addEventListener('click', () => {
  const contraseña = document.getElementById("pass").value;
  if (contraseña == "LABORATORIA") {
    document.getElementById("pantalla1").classList.add("hide");
    document.getElementById("pantalla2").classList.remove("hide");
  }
  else {
    intentos = intentos + 1;
    document.getElementById("falla").innerHTML = "Ups! Contraseña incorrecta, intente otra vez";


    if (intentos == 3) {
      document.getElementById("falla").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
      document.getElementById('verificar').disabled = true;
      document.getElementById("pass").disabled = true;
    }
  }
});

const cifrarBtn = document.getElementById('cifrar');
const descifrarBtn = document.getElementById('descifrar');
let texto = document.getElementById('textoCi');
let respuesta = document.getElementById('respuesta');
let numero = document.getElementById('codigo');

cifrarBtn.addEventListener('click', () => {
  
  let nuevoTexto = cipher.encode (parseInt(numero.value), texto.value);
  respuesta.value= nuevoTexto;
  
    
});


descifrarBtn.addEventListener('click', () => {
  let nuevoTextoDos = cipher.decode (parseInt(numero.value), texto.value);
  respuesta.value= nuevoTextoDos;
 
});