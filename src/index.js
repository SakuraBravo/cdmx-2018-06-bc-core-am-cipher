//Intentando convertir resultados de funciones en variables GLOBALES O_O


const introducirTexto = () => { // Sintaxis ES6
  const intro = document.getElementById("entrada").value; // Declaro la variable como var porque necesito poder acceder a ella por fuera de la función
  const offset = document.getElementById("offset").value;
  document.getElementById("demo").innerHTML = intro + " " + offset; // Lo hice para provar
  if (true){
   let i = 0;// Esta es la funcion que mide el string y lo separa en índices
   let altas = intro.toUpperCase(); // Aqui transformo el string en altas
    while (i < altas.length) {
      let ascii = (altas[i]).charCodeAt();//Variable con codigo ASCII
      //console.log(altas); // Compruebo que imprima en la pantalla
      i++
   const codificar = (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
       return x - 65 + y % 26 + 65; // Le quité paréntesis para que saliera pero no se qué pasó o por qué chigaooos
       }
   const codigo = codificar (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
   const respuesta = String.fromCharCode(codigo);// Aplico el método de
   console.log(respuesta);
   document.getElementById("demo2").innerHTML += respuesta;
    }
  }
}
// Utilizo la misma función para decodificar
const decodificar = () => { // Sintaxis ES6
  const intro = document.getElementById("entrada").value; // Declaro la variable como var porque necesito poder acceder a ella por fuera de la función
  const offset = document.getElementById("offset").value;
  document.getElementById("demo").innerHTML = intro + " " + offset; // Lo hice para provar
  if (true){
   let i = 0;// Esta es la funcion que mide el string y lo separa en índices
   let altas = intro.toUpperCase();
    while (i < altas.length) {
      var ascii = (altas[i]).charCodeAt();//Variable con codigo ASCII
      //console.log(altas); // Compruebo que imprima en la pantalla
      i++
   const decodificar = (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
       return (x + 65 - y) % 26 + 65;
       }
   const codigo = decodificar (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
   const respuesta = String.fromCharCode(codigo);// Aplico el método de
   console.log(respuesta);
   document.getElementById("demo2").innerHTML += respuesta;
    }

  //for (let i=0; i< intro.length; i++){ //For para separar el string si sale.
  //console.log(intro.substr(i,1));
  //}
  }
}
