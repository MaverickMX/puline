/* Variables globales para la app */

let ingresoMinimoPerros = 5000;
let ingresoMinimoGatos = 3000;
let nombre;
const PERROS = [];
const GATOS = [];

/* Función constructora para ingresar mascotas nuevas en adopción */
class Mascota {
  constructor(nombre, especie, edad, talla, sociable, sexo, caracter, estado) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.talla = talla;
    this.sociable = sociable;
    this.sexo = sexo;
    this.caracter = caracter;
    this.estado = estado;
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

      document.write("<p>" + nombre + " cuentanos qué te gustaría hacer hoy? </p>");
        /* Aquí podría ejecutar tramite() */
        
      break;
    }else {
        alert('Favor de ingresar un nombre valido');
        
    }
  }
}

/* función que sirve para comprobar si un usuario está ingresando un nombre valido, solo debe ingresar strings, no son validos los números ni campos vacíos */
/* Debo checar como hacer por si un usuario ingresa varios espacios salga false ya que null no me está funcionando */
let comprobar = () => nombre != "" && isNaN(verificacion()) && nombre != null;

/* Función para convertir un nombre en número */

let verificacion = () => parseFloat(nombre);

/* Función para mostrar las opciones que existen */

let tramite = () => {

    document.write('<p>Ingresa 1 si deseas dar en adopción a una mascota </p>');
    document.write('<p>Ingresa 2 si deseas adoptar una mascota</p>');

};



let desplegarMenu = () => {
  alert("Recuerda abrir la consola para tener una mejor experiencia");
  console.log("Digita 1 para perros");
  console.log("Digita 2 para gatos");

  let tipo = prompt("Qué tipo de mascota te gustaría adoptar?");

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
    desplegarMenu();
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
