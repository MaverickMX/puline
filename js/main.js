/* Variables globales para la app */

let ingresoMinimoPerros = 5000;
let ingresoMinimoGatos = 3000;
let nombre;
const PERROS = [];
const GATOS = [];

/* Array de los productos de la tienda */

const PRODUCTOS = [
  {
    id:'alimento-01',
    titulo:'Nupec Adulto',
    imagen: '../img/alimento/nupec.jpg',
    precio: 1500,
    categoria: {
      nombre:'Alimento',
      id: 'alimento'
    }
  },
  {
    id:'alimento-02',
    titulo:'Pedigree Cachorro',
    imagen: '../img/alimento/pedigreeCachorro.jpg',
    precio: 1250,
    categoria: {
      nombre:'Alimento',
      id: 'alimento'
    }
  },
  {
    id:'alimento-03',
    titulo:'Pedigree Adulto',
    imagen: '../img/alimento/pedrigreeAdulto.jpg',
    precio: 1300,
    categoria: {
      nombre:'Alimento',
      id: 'alimento'
    }
  },
  {
    id:'alimento-04',
    titulo:'Pro Plan',
    imagen: '../img/alimento/proPlan.jpg',
    precio: 1000,
    categoria: {
      nombre:'Alimento',
      id: 'alimento'
    }
  },
  {
    id:'alimento-05',
    titulo:'Royal Canin Adulto',
    imagen: '../img/alimento/royalcanin.jpg',
    precio: 1500,
    categoria: {
      nombre:'Alimento',
      id: 'alimento'
    }
  },
  {
    id:'Correa-01',
    titulo:'Correa Tela negra',
    imagen: '../img/correas/correa1.jpg',
    precio: 800,
    categoria: {
      nombre:'Correa',
      id: 'correa'
    }
  },
  {
    id:'Correa-02',
    titulo:'Correa Corta negra',
    imagen: '../img/correas/correa2.jpg',
    precio: 600,
    categoria: {
      nombre:'Correa',
      id: 'correa'
    }
  },
  {
    id:'Correa-03',
    titulo:'Correa Retractible Azul',
    imagen: '../img/correas/correa3.jpg',
    precio: 1200,
    categoria: {
      nombre:'Correa',
      id: 'correa'
    }
  },
  {
    id:'Correa-04',
    titulo:'Correa Tela Verde',
    imagen: '../img/correas/correa4.jpg',
    precio: 800,
    categoria: {
      nombre:'Correa',
      id: 'correa'
    }
  },
  {
    id:'Correa-05',
    titulo:'Pechera Azul',
    imagen: '../img/correas/correa5.jpg',
    precio: 1800,
    categoria: {
      nombre:'Correa',
      id: 'correa'
    }
  },
  {
    id:'Juguete-01',
    titulo:'Tapete rascador',
    imagen: '../img/juguetes/jugueteGato1.jpg',
    precio: 900,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  },
  {
    id:'Juguete-02',
    titulo:'Juguete para gato',
    imagen: '../img/juguetes/jugueteGato2.jpg',
    precio: 500,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  },
  {
    id:'Juguete-03',
    titulo:'Cuerda para morder',
    imagen: '../img/juguetes/juguetePerro1.jpg',
    precio: 900,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  },
  {
    id:'Juguete-04',
    titulo:'Entrenador para Perro',
    imagen: '../img/juguetes/juguetePerro2.jpg',
    precio: 1100,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  },
  {
    id:'Juguete-05',
    titulo:'Pelota Nerf',
    imagen: '../img/juguetes/juguetePerro3.jpg',
    precio: 950,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  },
  {
    id:'Juguete-06',
    titulo:'Pelota de plastico',
    imagen: '../img/juguetes/juguetePerro4.jpg',
    precio: 300,
    categoria: {
      nombre:'Juguete',
      id: 'juguete'
    }
  }
];

const CONTENEDORPRODUCTOS = document.querySelector('#contenedor-productos');
const BOTONESCATEGORIAS = document.querySelectorAll('.boton-categoria');
const TITULOPRINCIPAL = document.querySelector('#titulo-principal');

function cargarProductos(productosElegidos){
  CONTENEDORPRODUCTOS.innerHTML = "";

  productosElegidos.forEach(producto =>{

    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-comprar" id="${producto.id}">Comprar</button>
                    </div>
    `

    CONTENEDORPRODUCTOS.append(div);
  })

}

cargarProductos(PRODUCTOS);

BOTONESCATEGORIAS.forEach(boton =>{

  boton.addEventListener("click", (e) =>{

    BOTONESCATEGORIAS.forEach(boton =>{
      boton.classList.remove('active');
    })

    e.currentTarget.classList.add('active');

    if (e.currentTarget.id != 'todos') {
     const productosBoton = PRODUCTOS.filter( producto => producto.categoria.id === e.currentTarget.id);

    cargarProductos(productosBoton); 
    } else{
      cargarProductos(PRODUCTOS)
    }

    
  })
})

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

/* iniciar();
 */