/* Variables globales para la app */

let nombre;
let PRODUCTOS = [];

const CONTENEDORPRODUCTOS = document.querySelector('#contenedor-productos');
const BOTONESCATEGORIAS = document.querySelectorAll('.boton-categoria');
const TITULOPRINCIPAL = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-comprar');
const NUMERITO = document.querySelector('#numerito');

function obtenerProductos(){
  fetch('../data/productos.json')
  .then( response => response.json())
  .then(data =>{
    PRODUCTOS = data;
    cargarProductos(PRODUCTOS);
  })
}

obtenerProductos();

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