window.cipher = {

// Función donde se procesa el resultado de codificar
  encode : (intro, offset) => {
    let respuesta = ""; // Dejo el string vacio para que contenga el resultado de for
    for (let i=0; i< intro.length; i++){
      let ascii = (intro[i]).charCodeAt();//Variable con codigo ASCII
      let codigo = cipher.formula1 (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
      respuesta += String.fromCharCode(codigo);// Aplico el método de
      console.log(respuesta);
  }
  return respuesta;
},

  //Fórmula de CODIFICAR:
  formula1 : (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
    if(x >= 65 && x<=90){ //Parámetro de mayúsculas ASCII
    return (x - 65 + y ) % 26 + 65;
  } else if (x>=97 && x<=122) { //Parámetro de minúsculas ASCII
    return (x - 97 + y ) % 26 + 97;
  } else if (x>=48 && x<=57){ //Parámetro de números
    return (x - 48 + y ) % 10 + 48; // %10 Ya que del 0
  } else if (x===32){ // Cuando x es espacio
    return x;
  } else { // Cuando x es caracter no señalado o "caracter especial"
    return x;// Quiero reducir la fórmula ya que me parece repetitiva
  }
},

// Función donde se procesa el resultado de decodificar
  decode : (intro, offset) => {
    let respuesta = "";
    for (let i=0; i< intro.length; i++){
      let ascii = (intro[i]).charCodeAt();//Variable con codigo ASCII
      let codigo = cipher.formula2 (ascii, offset); //Declaro los argumentos que se aplican a la función que codifica el mensaje
      respuesta += String.fromCharCode(codigo);// Aplico el método de
      console.log(respuesta);
  }
  return respuesta;
},

//Fórmula de DECODIFICAR:
formula2 : (x , y) => { //Declaro la variable para guardar lo obtenido en la funcion que codifica el string
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
},

	createCipherWithOffset: () =>{} // Declaro la función para pasar la prueba pero queda pendiente que contenga las funciones de encode y decode
};
