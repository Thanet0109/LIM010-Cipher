
window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/  
    let nuevoTexto = "";
  for (let i = 0; i < string.length; i++) {
    let codigo1 = string.charCodeAt(i);
        if (codigo1 >= 65 && codigo1 <= 90) {
          nuevoTexto += String.fromCharCode((codigo1 - 65 + offset) % 26 + 65); 
    }   else if (codigo1 >= 97 && codigo1 <= 122) {
          nuevoTexto += String.fromCharCode((codigo1 - 97 + offset) % 26 + 97); 
    } 
        else{ 
          nuevoTexto += string.charAt(i);
           
    }
      } 
     return nuevoTexto;
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let nuevoTextoDos = "";
  
    for (let i = 0; i < string.length; i++) {
      let codigo1 = string.charCodeAt(i);
      if (codigo1 >= 65 && codigo1 <= 90)
        nuevoTextoDos += String.fromCharCode((codigo1 + 65 - offset + 26 ) % 26 + 65);
      else if (codigo1 >= 97 && codigo1 <= 122)
        nuevoTextoDos += String.fromCharCode(122-(122 - codigo1 +  offset) % 26 );
      else {
        nuevoTextoDos += string.charAt(i);
      }
        }
        return nuevoTextoDos
  }};
