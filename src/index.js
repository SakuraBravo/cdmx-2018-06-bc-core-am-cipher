let cadena = document.getElementById("entrada"); // Declaro de dónde voy a obtener el string
let key = document.getElementById("offset");// Declaro de dónde voy a obtener el offset


//Función de ONCLICK Codificar:
const textoCodificado = () => { // Sintaxis ES6
  let intro = cadena.value;
  let offset = parseInt(key.value);
  document.getElementById("demo").innerHTML = cipher.encode(intro,offset);
}

//Función ONCLICK Decodificar
const textoDecodificado = () => { // Sintaxis ES6
  let intro = cadena.value;
  let offset = parseInt(key.value);
  document.getElementById("demo").innerHTML = cipher.decode(intro,offset);
}
