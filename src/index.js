let cadena = document.getElementById("entrada"); // Declaro de dónde voy a obtener el string
let key = document.getElementById("offset");// Declaro de dónde voy a obtener el offset


//Función de ONCLICK Codificar:
const textoCodificado = () => { // Sintaxis ES6
  let intro = cadena.value;
  let offset = parseInt(key.value);
  document.getElementById("demo").innerHTML = intro + " " + offset; // Prueba de que entra bien la info del input
  document.getElementById("demo2").innerHTML = cipher.encode(intro,offset);
}

//Función ONCLICK Decodificar
const textoDecodificado = () => { // Sintaxis ES6
  let intro = cadena.value;
  let offset = parseInt(key.value);
  document.getElementById("demo").innerHTML = intro + " " + offset; // Prueba de que entra bien la info del input
  document.getElementById("demo2").innerHTML = cipher.decode(intro,offset);
}

    //for (let i=0; i< intro.length; i++){ //For para separar el string si sale.
    //console.log(intro.substr(i,1));
    //}
