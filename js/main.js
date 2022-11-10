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
        
      break;
    }else {
        alert('Favor de ingresar un nombre valido');
        
    }
  }
}

/* función que sirve para comprobar si un usuario está ingresando un nombre valido, solo debe ingresar strings, no son validos los números ni campos vacíos */

let comprobar = () => nombre != "" && isNaN(verificacion()) && nombre != null && nombre != " ";

/* Función para convertir un nombre en número */

let verificacion = () => parseFloat(nombre);

/* Función para mostrar las opciones que existen */

let tramite = () => {

    while(true){

    let tramite = prompt('Ingresa 1 si quieres dar en adopción, ingresa 2 si quieres adoptar');

     if (tramite == 1) {
      
      darEnAdopcion();

      break;

    } else if( tramite == 2){

      adoptar();

      break;

    } else{

      alert('Ingresa una opción valida');
      
    }

  }

};

function darEnAdopcion () {

  let nombreMascota = prompt('Ingrese el nombre de la mascota');
  let especieMascota = prompt('Ingrese la especie de la mascota');
  let edadMascota = prompt('Ingrese la edad de la mascota');
  let tallaMascota = prompt('Ingrese la talla de la mascota');
  let sociableMascota = prompt('Con quien es sociable la mascota?');
  let sexoMascota = prompt('Ingrese el sexo de la mascota');
  let caracterMascota = prompt('Ingrese si es tranquilo o jugueton');
  let estadoMascota = prompt('En qué estado se encuentra la mascota?');
  let imagenMascota = prompt('Ingrese una imagen de la mascota');

  if(especieMascota == 'perro'){
    PERROS.push(new Mascota(nombreMascota,especieMascota,edadMascota,tallaMascota,sociableMascota,sexoMascota,caracterMascota,estadoMascota,imagenMascota));
  } else if (especieMascota == 'gato'){
    GATOS.push(new Mascota(nombreMascota,especieMascota,edadMascota,tallaMascota,sociableMascota,sexoMascota,caracterMascota,estadoMascota,imagenMascota));
  } else{
    alert('ingrese una especie correcta');
    darEnAdopcion();
  }

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
