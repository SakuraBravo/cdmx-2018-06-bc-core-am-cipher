let intro = " "; // Las pongo con string vacio ya que al declarar una constante
let offset = " ";// tiene que estar igualada a algún valor.

//Fórmula de CODIFICAR:
const codificar = (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
  if(x >= 65 && x<=90){ //Parámetro de mayúsculas ASCII
  return (x - 65 + y ) % 26 + 65;
} else if (x>=97 && x<=122) { //Parámetro de minúsculas ASCII
  return (x - 97 + y ) % 26 + 97;
} else if (x>=48 && x<=57 ){ //Parámetro de números
  return (x - 48 + y ) % 10 + 48; // %10 Ya que del 0
} else if (x===32){ // Cuando x es espacio
  return x;
} else { // Cuando x es caracter no señalado o "caracter especial"
  return x;// Quiero reducir la fórmula ya que me parece repetitiva
}
}
//Función de ONCLICK Codificar:
const textoCodificado = () => { // Sintaxis ES6
  intro = document.getElementById("entrada").value; // Declaro la variable como var porque necesito poder acceder a ella por fuera de la función
  offset = parseInt(document.getElementById("offset").value); // Tenemos que pasar el string a número
  document.getElementById("demo").innerHTML = intro + " " + offset; // Lo hice para provar
  let i = 0;// Esta es la funcion que mide el string y lo separa en índices
  let ascii = 0; // La declaro antes para sacarla del scope del while
  while (i < intro.length) {
    ascii = (intro[i]).charCodeAt();//Variable con codigo ASCII
    i++
    const codigo = codificar (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
    const respuesta = String.fromCharCode(codigo);// Aplico el método de
    document.getElementById("demo2").innerHTML += respuesta;
  }
}
//Fórmula de DECODIFICAR:
const decodificar = (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
  if(x >= 65 && x<=90){ //Parámetro de mayúsculas ASCII
  return (x - 90 - y ) % 26 + 90;
} else if (x>=97 && x<=122) { //Parámetro de minúsculas ASCII
  return (x - 122 - y ) % 26 + 122;
} else if (x>=48 && x<=57 ){ //Parámetro de números
  return (x - 57 - y ) % 10 + 57; // %10 Ya que del 0
} else if (x===32){ // Cuando x es espacio
  return x;
} else { // Cuando x es caracter no señalado o "caracter especial"
  return x;// Quiero reducir la fórmula ya que me parece repetitiva
}
}
//Función ONCLICK Decodificar
const textoDecodificado = () => {
  intro = document.getElementById("entrada").value; // Declaro la variable como var porque necesito poder acceder a ella por fuera de la función
  offset = parseInt(document.getElementById("offset").value); // Tenemos que pasar el string a número
  document.getElementById("demo").innerHTML = intro + " " + offset; // Lo hice para provar
  let i = 0;// Esta es la funcion que mide el string y lo separa en índices
  let ascii = 0; // La declaro antes para sacarla del scope del while
  while (i < intro.length) {
    ascii = (intro[i]).charCodeAt();//Variable con codigo ASCII
    i++
    const codigo = decodificar (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
    const respuesta = String.fromCharCode(codigo);// Aplico el método de
    document.getElementById("demo2").innerHTML += respuesta;
  }
}
    //for (let i=0; i< intro.length; i++){ //For para separar el string si sale.
    //console.log(intro.substr(i,1));
    //}
