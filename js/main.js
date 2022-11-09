/* Variables globales para la app */

let ingresoMinimoPerros = 5000;
let ingresoMinimoGatos = 3000;
let nombre;
const PERROS = [];
const GATOS = [];

/* Función constructora para ingresar mascotas nuevas en adopción */
class Mascota {
  constructor(nombre, especie, edad, talla, sociable, sexo, caracter, estado, imagen) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.talla = talla;
    this.sociable = sociable;
    this.sexo = sexo;
    this.caracter = caracter;
    this.estado = estado;
    this.imagen = imagen;
  }

  saludar() {
    console.log(
      "Hola mi nombre es " +
        this.nombre +
        " soy un " +
        this.especie +
        " muy " +
        this.caracter
    );
  }
}

/* Función que inicia la aplicación */

let iniciar = () => {
  preguntarNombre();
  tramite();
};


/*  Función para pedir los datos del usuario */

function preguntarNombre() {

  while (true) {
    nombre = prompt("Hola, bienvenido a Pupline. Por favor ingresa tu nombre");

    if (comprobar()) {

      alert(`${nombre} cuentanos que te gustaría hacer hoy?`);
        /* Aquí podría ejecutar tramite() */
        
      break;
    }else {
        alert('Favor de ingresar un nombre valido');
        
    }
  }
}

/* función que sirve para comprobar si un usuario está ingresando un nombre valido, solo debe ingresar strings, no son validos los números ni campos vacíos */
/* Debo checar como hacer por si un usuario ingresa varios espacios salga false ya que null no me está funcionando */
let comprobar = () => nombre != "" && isNaN(verificacion()) && nombre != null && nombre != " ";

/* Función para convertir un nombre en número */

let verificacion = () => parseFloat(nombre);

/* Función para mostrar las opciones que existen */

let tramite = () => {

    

    while(true){

    let tramite = prompt('Ingresa 1 si quieres dar en adopción, ingresa 2 si quieres adoptar');

     if (tramite == 1) {
      darEnAdopcion();
    } else if( tramite == 2){
      adoptar();
    } else{
      alert('Ingresa una opción valida');
    }

  }

    

};

function darEnAdopcion () {
  /* esto debe ser un form */
  let nombreMascota = prompt('Ingresa el nombre de la mascota');
  /* esto debe ser un button de dos opciones gato o perro */
  let especieMascota = prompt('Ingresa la especie de la mascota');
  /* esto debe ser un rango de numeros */
  let edadMacota = prompt('Ingrese la edad de la mascota');
  /* esto debe ser tres opciones chico mediano o grande */
  let tallaMascota = prompt('Ingrese la talla de la mascota');
  /* Esto debe ser un checkbox entre animales (macho y hembra), personas, otras especies*/
  let sociableMacota = prompt('Ingrese con quien es sociable la mascota');
  /* Esto debe ser dos opciones macho o hembra */
  let sexoMascota = prompt('Ingrese el sexo de la mascota');
  /* Esto debe ser dos opciones tranquilo o jugueton*/
  let caracterMascota =  prompt('Ingrese el caracter de la mascota');
  /* Esto debe ser el estado en donde está */
  let estadoMascota = prompt('Ingrese el estado en donde se ubica la mascota');
  /* Esto debe de ser links de imagenes de la mascota */
  let imagenMascota = prompt('Ingrese las imagenes de la mascota');

  Mascota(n)/* aWUí ME QUEDE */

}



let adoptar = () => {
 

  let tipo = prompt("Qué tipo de mascota te gustaría adoptar? Ingresa 1 para perros, ingresa 2 para gatos");

  switch (tipo) {
    case "1":
      menuPerros();
      break;
    case "2":
      menuGatos();
      break;
    default:
      alert("Ingresa una opción valida");
      desplegarMenu();
      break;
  }
};

let menuPerros = (_) => {
  let ingreso = Number(prompt("De cuánto es tu ingreso mensual?"));

  if (ingreso >= ingresoMinimoPerros) {
    encuestaDeAdopcion();
  } else if (ingreso < ingresoMinimoPerros && ingreso >= ingresoMinimoGatos) {
    alert(
      "No cuentas con el ingreso suficiente para adoptar este tipo de mascota, intenta con un gato"
    );
    adoptar();
  } else {
    alert("No cuentas con el ingreso suficiente para mantener a una mascota");
  }
};

function encuestaDeAdopcion() {
  let espacio = confirm(
    "Tienes un espacio en donde pueda vivir dignamente la mascota?"
  );

  if (espacio) {
    let tiempo = confirm(
      "Cuentas con el tiempo para jugar y pasear con una mascota?"
    );
    if (tiempo) {
      alert(
        "Felicidades cuentas con todos los requisitos para adoptar, en breve nos comunicaremos contigo"
      );
    } else {
      alert(
        "Lo sentimos , no cumples con los requisitos para adoptar una mascota"
      );
    }
  } else {
    alert(
      "Lo sentimos , no cumples con los requisitos para adoptar una mascota"
    );
  }
}

let menuGatos = () => {
  let ingreso = Number(prompt("De cuánto es tu ingreso mensual?"));

  if (ingreso >= ingresoMinimoGatos) {
    encuestaDeAdopcion();
  } else {
    alert("No cuentas con el ingreso suficiente para mantener a una mascota");
  }
};

iniciar();
