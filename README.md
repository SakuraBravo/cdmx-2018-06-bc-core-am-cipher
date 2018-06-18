# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Objetivos

De acuerdo al contexto situacional del reto, posiciono al usuario dentro del rango de mi edad y similar a mi perfil de recursos y hábitos, por lo tanto puedo partir de ciertas suposiciones para crear una proto-persona.
#### Pero primero, ¿qué es una protopersona?
Una persona es un personaje ficticio que representa el arquetipo de nuestro target, este target debe ser definido con base a investigaciones previas. Una proto-persona se basa en acercamientos mediante supuestos, no requiere una investigación exhaustiva y es “Low fidelity” así que trabajar con proto-personas debe ser sólo una parte del proceso para definir el target de usuario, así como dar ideas hacia dónde dirigir los esfuerzos de _UR_ y dar cabida a avances e hipótesis en nuestra búsqueda de soluciones a las necesidades del usuario como también posibles soluciones de interfaces.

#### Proto Persona

/Nombre : Fyl./
/Edad:	30 años./
/Genero:	Masculino./
/Ocupación:	Gerente de Operaciones./
/Status:		En una relación./
/Intereses:		Tecnología, Werables, Deportes, Cine, su Novia./
/Personalidad:	Gracioso, inteligente, nervioso./

Metas:		
* Pasar más tiempo con su pareja.
* Hacer ejercicio diariamente.
* Invertir en su juventud para nos sufrir en su vejez.

Pain Points:
* Estresarse de más por las cosas
* Guardar secretos
* Invertir mucho tiempo en los traslados


*Requerimientos UX:*
* 1.- El producto tendrá la capacidad de usarse en dispositivos móviles: El usuario gusta de la tecnología y werables, por lo que es primordial que el 		producto esté disponible en una versión para movil.
* 2.-El producto sólo cumplirá las funciones de codificar y decodificar: El usuario tiende a estrenarse con complicaciones así que es importante mantener 	la solución simple.
* 3.-El producto se presentará de una forma discreta u oculta: El usuario no es bueno guardando secretos, por lo que el producto debe de ayudarlo a 		cumplir con este cometido.


## Investigación de referentes.

El usuario (Proto-Persona) necesita un producto que le permita compartir mensajes codificados con sus conocidos de una forma simple y también fácil de ocultar. Con estos requerimiento presentes, me di a la tarea de buscar productos existentes que incluyeran el Cifrado Cesar o algún tipo de cifrado, la primera página que aparece en las búsquedas de Cifrado Cesar es: https://www.dcode.fr/caesar-cipher, esta página te permite codificar mensajes pero su interfaz es muy complicada y lleva tiempo comprenderla. 
[![Página de Cifrado cesar](https://goo.gl/SyTZdx)

Otras opciones que encontré en mi búsqueda se referían más a la necesidad de seguridad de los mensajes, pero con respecto a que no se pudieran acceder a ellos por algún tipo de hacking o intercepción entre el punto A al B, o sea entre el curso de la información de un usuario a otro (comunicación cifrada extremo a extremo), por lo que surgieron muchas apps que cifraban los mensajes entre los puntos y los descifraban para su fácil lectura, pero aunque ocurra la acción de cifrado el usuario no se percata de esta acción ya que el resultado que obtiene es un mensaje legible. Apps como CryptoCat, Telegram y ahora WhatsApp ponen a disposición del usuario la capacidad de cifrar el contenido de sus mensajes como un plus de seguridad en su servicio de mensajería instantánea, pero no resuelven la necesidad de mi Proto-Persona de obtener mensajes cifrados que sólo él pueda interpretar en el momento que él decida.
[![Crypto Cat](https://goo.gl/xHfcW1)

## Insights

Dentro de esta misma investigación recordé una app que me habían mostrado tiempo atrás que te permitía guardar una galería de fotos oculta en tu celular bajo la pantalla de una app calculadora, la idea es que la App pasa desapercibida en el universo de apps del celular pues tanto su interfaz inicial (donde ingresabas la clave para entrar a la galería) como su ícono de apertura son totalmente parecidos a una aplicación de una calculadora, por lo que cumple la doble función de contener imágenes privadas y mantenerlas ocultas y seguras.
[![APP KYCALC](https://goo.gl/cXJdzQ)

Con esto en mente y mientras continuaba el desarrollo de la funcionalidad del producto, busqué tareas que fueran similares a la de cifrar y descifrar una clave lo cual no fue difícil de deducir que la acción más próxima es la de traducir de un idioma a otro.

(IMAGEN DE DIAGRAMA DE FLUJO DE TRADUCIR Y DE DECIFRAR)

### Entrevistas
Realicé entrevistas cortas a usuarios de traductores de idiomas (3) con las siguientes interrogantes:
* ¿Cómo usan la aplicación? (Observación de la acción)
* ¿Cuándo la usan?
* ¿Cómo la usan en una conversación?

[![Interfaz de Google Translate](https://goo.gl/pvAfZF)

### Conclusiones:

 * Los usuarios usan la aplicación para apoyarse traduciendo textos en otros idiomas.
* Lo usan activamente en conversaciones con personas que tienen un idioma distinto al del       usuario.
* Lo usan paralelamente a alguna aplicación de mensajería instantánea.


Por lo tanto los requerimientos de UI son:
* 1.- El producto debe ser similar estéticamente a un traductor de idiomas:  	Que parezca similar a google translate para que pase desapercibido.
* 2.- El producto debe ser similar en distribución de contenido a un traductor de idiomas:  	El usuario ya familiarizado con la interfaz, además de que contribuirá a mantener el secreto de su uso.
* 3.- El producto debe de prevenir el error:
	Tener la capacidad de iniciarse y reiniciarse sin problema y pedir al usuario claramente la información necesaria para cumplir la acción.

Además de los requerimientos de UI establecidos previamente en el ejercicio que son:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

## Producto DEMO

Ya que la app de traducción de idiomas líder en el mercado es Google Translator, el producto Demo (Cipher Translator) busca imitar visiblemente la estética de la aplicación Traductor de Google, esto por un doble interés:
* Mantener oculta la función de la app Cipher Translator
* Aprovechar el modelo mental ya establecido y arraigado con dicha interfaz del traductor.  
### Movil First:
La app Cipher Translator  está diseñada principalmente para ser usada en dispositivos móviles paralelamente con el uso de alguna otra app de mensajería instantánea.

### Pruebas con usuario:
Para poder usar la app Cipeher Translator los usuarios tenían que establecer previamente la KEY (el offset) que iban a utilizar en su conversación, y a partir de ahí, sólo tienen que copiar y pegar las líneas de conversación de su app de mensajería instantánea, en este caso WhatsApp a la aplicación de cifrado. Ya que la interfaz se mantuvo simple y similar a una aplicación de traducción de idiomas, la interacción con ésta fue muy natural para el usuario muestra, y pudo mantener una conversación con mensajes secretos.   Primer feedback de las pruebas: 

* Es necesario agregar un botón de copy a la interfaz ya que el usuario presentó dificultad en el momento de trasladar las líneas codificadas a su app de mensajería instantánea y viceversa.

* También comentó que se podría hacer una reducción en el número de botones ya que Google Translate sólo ocupa uno.

[![Pruebas de usuario](https://goo.gl/M2jPUC) [![Pruebas de usuario](https://goo.gl/M2jPUC)


__________________________________________


### Desarrollo de Código
