/* Variables globales para la app */

let nombre;

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
let botonesAgregar = document.querySelectorAll('.producto-comprar');
const NUMERITO = document.querySelector('#numerito');

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

  actualizarBotonesAgregar()
  

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

     const PRODUCTOCATEGORIA = PRODUCTOS.find(producto => producto.categoria.id === e.currentTarget.id);
     TITULOPRINCIPAL.innerText = PRODUCTOCATEGORIA.categoria.nombre;

    cargarProductos(productosBoton); 
    } else{
      TITULOPRINCIPAL.innerText = "Todos los productos";
      cargarProductos(PRODUCTOS)
    }

    
  })
})

function actualizarBotonesAgregar(){
  botonesAgregar = document.querySelectorAll('.producto-comprar');
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {

  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito()
}else{
  productosEnCarrito = [];
}


function agregarAlCarrito(e){
  Toastify({
    text: "Agregaste un producto a tu carrito",
    duration: 3000,
    close: true,
    gravity: "bottom", 
    position: "right",
    stopOnFocus: true, 
    style: {
      background: "$primerColor",
    }
  }).showToast();

  const IDBOTON = e.currentTarget.id;
  const PRODUCTOAGREGADO = PRODUCTOS.find(producto => producto.id === IDBOTON);
  

  if(productosEnCarrito.some(producto => producto.id === IDBOTON)){

    const INDEX = productosEnCarrito.findIndex(producto => producto.id === IDBOTON);
    productosEnCarrito[INDEX].cantidad++;

  }else{
    PRODUCTOAGREGADO.cantidad = 1;
    productosEnCarrito.push(PRODUCTOAGREGADO);
  }
  actualizarNumerito()
  
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
  let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0)
  NUMERITO.innerText = nuevoNumerito;
}