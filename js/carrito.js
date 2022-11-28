let PRODUCTOSENCARRITO = localStorage.getItem('productos-en-carrito');
PRODUCTOSENCARRITO = JSON.parse(PRODUCTOSENCARRITO)
const CONTENEDORCARRITOVACIO = document.querySelector('#carrito-vacio');
const CONTENEDORCARRITOPRODUCTOS = document.querySelector('#carrito-productos');
const CONTENEDORCARRITOACCIONES = document.querySelector('#carrito-acciones');
const CONTENEDORCARRITOCOMPRADO = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const BOTONVACIAR = document.querySelector('.carrito-acciones-borrar');
const BOTONCOMPRAR = document.querySelector('.carrito-acciones-comprar');
const CONTERNEDORTOTAL = document.querySelector('#total');

function cargarProductosCarrito(){
    if(PRODUCTOSENCARRITO && PRODUCTOSENCARRITO.length > 0 ){

        
        CONTENEDORCARRITOVACIO.classList.add('disabled');
        CONTENEDORCARRITOPRODUCTOS.classList.remove('disabled');
        CONTENEDORCARRITOACCIONES.classList.remove('disabled');
        CONTENEDORCARRITOCOMPRADO.classList.add('disabled');
    
        CONTENEDORCARRITOPRODUCTOS.innerHTML = '';
    
        PRODUCTOSENCARRITO.forEach(producto => {
           const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${producto.id}" class="carrito-producto-eliminar">
                <i class="bi bi-trash3"></i>
            </button>
            `;
    
            CONTENEDORCARRITOPRODUCTOS.append(div);
        })
        
    }else{
    
        CONTENEDORCARRITOVACIO.classList.remove('disabled');
        CONTENEDORCARRITOPRODUCTOS.classList.add('disabled');
        CONTENEDORCARRITOACCIONES.classList.add('disabled');
        CONTENEDORCARRITOCOMPRADO.classList.add('disabled');
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();



function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', eliminarDelCarrito);
    })
  }

  function eliminarDelCarrito(e){
    let idBoton = e.currentTarget.id;
    const INDEX = PRODUCTOSENCARRITO.findIndex(producto => producto.id === idBoton);
    
    PRODUCTOSENCARRITO.splice(INDEX,1);
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(PRODUCTOSENCARRITO));
    
  }

  BOTONVACIAR.addEventListener('click', vaciarCarrito);

  function vaciarCarrito(){
    PRODUCTOSENCARRITO.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(PRODUCTOSENCARRITO));
    cargarProductosCarrito();

  }

  function actualizarTotal(){
    const TOTALCALCULADO = PRODUCTOSENCARRITO.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
    CONTERNEDORTOTAL.innerText = `$${TOTALCALCULADO}`;

  }

  BOTONCOMPRAR.addEventListener('click', comprarCarrito);

  function comprarCarrito(){
    PRODUCTOSENCARRITO.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(PRODUCTOSENCARRITO));

        CONTENEDORCARRITOVACIO.classList.add('disabled');
        CONTENEDORCARRITOPRODUCTOS.classList.add('disabled');
        CONTENEDORCARRITOACCIONES.classList.add('disabled');
        CONTENEDORCARRITOCOMPRADO.classList.remove('disabled');
    

  }