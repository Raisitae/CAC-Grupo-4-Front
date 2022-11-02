
// Lista de productos stockeados

const productos = [
    {
        id: 1,
        nombre: "El Infinito",
        img: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/348/m_libros/347042_portada_el-libro-negro-de-las-horas_eva-garcia-saenz-de-urturi_202112230826.jpg",
        precio: 2500,
        descripcion: "Libro sobre el infinito",
        stock: 10,
        categoria: "libros",
        oferta:true,
        novedad:false
    },
    {
        id: 2,
        nombre: "Harry Potter y las Reliquias de la Muerte",
        img: "https://contentv2.tap-commerce.com/cover/large/9789878000169_1.jpg?id_com=1113",
        precio: 2500,
        descripcion: "Libro de Harry Potter",
        stock: 10,
        categoria: "libros",
        oferta:false,
        novedad:false
    },
    {
        id: 3,
        nombre: "El caballero de la armadura oxidada",
        img: "https://i.scdn.co/image/ab67616d0000b273c1abe4295d6071f3fc4df2f2",
        precio: 3000,
        descripcion: "Un lindo libro para leer",
        stock: 30,
        categoria: "libros",
        oferta:false,
        novedad:true
    },
    {
        id: 4,
        nombre: "Cosa de madera",
        img: "https://www.arqhys.com/fotos/wp-content/uploads/2011/05/artesania-en-madera.jpg",
        precio: 4000,
        descripcion: "Artesania en madera",
        stock: 40,
        categoria: "arte",
        oferta:false,
        novedad:true
    },
    {
        id: 5,
        nombre: "Cajitas desayuno",
        img: "https://http2.mlstatic.com/D_NQ_NP_699827-MLA41987471762_052020-O.jpg",
        precio: 5000,
        descripcion: "Artesania en madera",
        stock: 50,
        categoria: "arte",
        oferta:false,
        novedad:false
    },
    {
        id: 6,
        nombre: "Cuchara cucharita cucharon",
        img: "https://salidores.sfo2.cdn.digitaloceanspaces.com/posts/57a0d27ebe0409fd4eb13972/images/9ca0c01d5e1f7768bb716ddf2d2320a3.jpg",
        precio: 5000,
        descripcion: "Artesania en madera",
        stock: 50,
        categoria: "arte",
        oferta:false,
        novedad:false
    },
    {
        id: 7,
        nombre: "Notebook",
        img: "https://http2.mlstatic.com/D_NQ_NP_975834-MLA51015201380_082022-V.jpg",
        precio: 2500,
        descripcion: "Una buena compu",
        stock: 10,
        categoria: "tecno",
        oferta:false,
        novedad:false
    },
    {
        id: 8,
        nombre: "Celular A33",
        img: "https://images.fravega.com/f300/f741c5dc03f09eebef57e56dcc86c8f9.jpg",
        precio: 2500,
        descripcion: "Un buen celu",
        stock: 10,
        categoria: "tecno",
        oferta:false,
        novedad:true
    },
    {
        id: 9,
        nombre: "Walkie Talkie",
        img: "https://pbs.twimg.com/media/EzhpTOzXIAQY_Pd.jpg",
        precio: 3000,
        descripcion: "De juguete",
        stock: 30,
        categoria: "tecno",
        oferta:false,
        novedad:true
    },
    {
        id: 10,
        nombre: "Almendras",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/almendras-beneficios-propiedades-calorias-1637756895.jpg?resize=640:*",
        precio: 4000,
        descripcion: "Que ricas",
        stock: 40,
        categoria: "alimento",
        oferta:false,
        novedad:false
    },
    {
        id: 11,
        nombre: "Nueces",
        img: "https://www.winmarket.com.ar/wp-content/uploads/2020/06/nueces02.jpg",
        precio: 5000,
        descripcion: "Mnnn que rico",
        stock: 50,
        categoria: "alimento",
        oferta:true,
        novedad:false
    },
    {
        id: 12,
        nombre: "Castañas de Caju",
        img: "https://www.nuecesmecohue.com.ar/wp-content/uploads/2017/10/CajuNatural.jpg",
        precio: 5000,
        descripcion: "Castañas",
        stock: 50,
        categoria: "alimento",
        oferta:false,
        novedad:true
    },
    {
        id: 13,
        nombre: "La historia interminable",
        img: "https://lamanodelextranjero.files.wordpress.com/2020/09/la-cubierta-de-guardas-de-la-primera-edicion-de-la-historia-interminable-en-alfaguara.jpg",
        precio: 2470,
        descripcion: "Un imprescindible",
        stock: 50,
        categoria: "libros",
        oferta:true,
        novedad:true
    },
    {
        id: 14,
        nombre: "Javascript definitivo Vol.1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6yaLBQ48q1nLJg-EeRyScBqQEddSyv1W3HkuH5yPg3FYV2-gB2E1XKMqCYuip4FfL2g&usqp=CAU",
        precio: 1200,
        descripcion: "Libro para aprender Javascript",
        stock: 10,
        categoria: "libros",
        oferta:true,
        novedad:false
    },
    {
        id: 15,
        nombre: "El libro de Doña Petrona",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMHXY9y4-Ekx-ExRLMTNP1s6XczHeUtn5dA&usqp=CAU",
        precio: 2300,
        descripcion: "Las mejores recetas aqui",
        stock: 30,
        categoria: "libros",
        oferta:false,
        novedad:true
    },
    {
        id: 16,
        nombre: "Teclado Super Gamer X-28",
        img: "https://http2.mlstatic.com/D_NQ_NP_824385-MLA51631455577_092022-O.jpg",
        precio: 7800,
        descripcion: "Espectacular",
        stock: 40,
        categoria: "tecno",
        oferta:true,
        novedad:true
    },
    {
        id: 17,
        nombre: "Mouse Gamer",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/3101-a4b53c0aaf3fc8f60316401950933650-1024-1024.jpg",
        precio: 2900,
        descripcion: "Retro Iluminado",
        stock: 50,
        categoria: "tecno",
        oferta:false,
        novedad:true
    },
    {
        id: 18,
        nombre: "Capsula Espacial Super X-2000",
        img: "https://www.rockandpop.cl/wp-content/uploads/2021/04/hipertextual-nasa-pone-fecha-historico-primer-viaje-tripulado-spacex-2020981638-768x432.jpg",
        precio: 260000,
        descripcion: "Para visitar el espacio",
        stock: 50,
        categoria: "tecno",
        oferta:true,
        novedad:false
    },
    {
        id: 19,
        nombre: "Maca Peruana Negra",
        img: "https://i0.wp.com/laduvalina.com.ar/wp-content/uploads/2021/07/img_7f7fd15149987d12a52c3b71bb8a8e79.jpg?fit=458%2C458&ssl=1",
        precio: 600,
        descripcion: "Energizante. (150g)",
        stock: 10,
        categoria: "alimento",
        oferta:true,
        novedad:false
    },
    {
        id: 20,
        nombre: "Urucum",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqSDZMJnHXlRmmjNNCaHbVaVzEQH8FSrFkQ&usqp=CAU",
        precio: 1500,
        descripcion: "Semillas saludables",
        stock: 10,
        categoria: "alimento",
        oferta:true,
        novedad:true
    },
    {
        id: 21,
        nombre: "Semillas de girasol",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVf8FcDpsvS4vg0K4rhCg8lLnJhBkVKg7Z7OddlyXKjrFdccPY36stuGW4PXS5n6U8QiA&usqp=CAU",
        precio: 200,
        descripcion: "Tostadas saladas",
        stock: 30,
        categoria: "alimento",
        oferta:true,
        novedad:false
    },
    {
        id: 22,
        nombre: "Pecesito de madera",
        img: "https://www.arqhys.com/contenidos/fotos/contenidos/Artesanias-en-madera-300x225.jpg",
        precio: 4500,
        descripcion: "Exquisito adorno",
        stock: 40,
        categoria: "arte",
        oferta:true,
        novedad:true
    },
    {
        id: 23,
        nombre: "Tejidos con fibras naturales",
        img: "https://www.arquitecturapura.com/wp-content/uploads/2019/12/artesan%C3%ADa-antigua.jpg",
        precio: 2300,
        descripcion: "Con tintes naturales",
        stock: 50,
        categoria: "arte",
        oferta:true,
        novedad:false
    },
    {
        id: 24,
        nombre: "Cerámicas",
        img: "https://feriadeartesanos.com/wp-content/uploads/2021/02/artesaniascyd.jpg",
        precio: 6700,
        descripcion: "Juego de pocillos",
        stock: 50,
        categoria: "arte",
        oferta:true,
        novedad:true
    }
];

// CLASE ARTICULO
class Articulo {
    id;
    nombre;
    img;
    precio;
    descripcion;
    stock;
    categoria;
    oferta;
    novedad;

    constructor(id, nombre, img, precio, descripcion, stock, categoria,oferta,novedad){
        this.id=id,
        this.nombre=nombre
        this.img=img,
        this.precio=precio,
        this.descripcion=descripcion,
        this.stock=stock,
        this.categoria=categoria,
        this.oferta=oferta,
        this.novedad=novedad
    }
}

/*----------ALMACENAMIENTO DE PRODUCTOS EN LOCAL STORAGE--------*/

// Convertimos el array de objetos tipo JSON en un string
const productosLocalStorage = JSON.stringify(productos);

// Almacenamos en el LocalStorage
localStorage.setItem("productos", productosLocalStorage);

// Podemos obtener los productos desde el LocalStorage 
let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));

// Creamos el array CARRITO para almacenar los artículos seleccionados
let carrito = [];

// Función generadora de las cards de artículos (clase ARTICULO)
const generarCards = (articulos) => {
    // Obtenemos el div que contendra los productos
    let cards = document.getElementById("productos");
    
    // Generamos la card para cada producto
    articulos.forEach( producto => {
        
        // Creamos la etiqueta CardPrpducto
        let cardProducto = document.createElement("div");
        cardProducto.className = "producto";

        let card = `
            <img class="imagen-producto" src="${producto.img}" alt="Card image cap">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="descripcion card-text">${producto.descripcion}</p>
            <p class="precio card-text">$ ${producto.precio}</p>
            <button  id="add${producto.id}" class="btn btn-success" onclick="comprar(${productos.indexOf(producto)})">Agregar al Carrito</button> 
        `;
    
        // Escribimos el contenido de la plantilla card en la etiqueta CardProducto
        cardProducto.innerHTML = card;

        // Agregamos la CardProducto en el div Productos (#productos)
        cards.appendChild(cardProducto);

    });    
    
}

// Función genérica para guardar una clave y valor el LocalStorage
function guardarEnStorage (clave,valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

/* Inicializacion de productos al cargar la página */
generarCards(productos);


/*----------FUNCIONES DE COMPRA-----------*/

// Seleccion de producto al CARRITO 
function comprar(id){
    /*console.log(id)*/
    carrito.push(productos[id]) 
    let comprate = JSON.stringify(carrito)
    localStorage.setItem("elegidos",comprate)
    /*console.log(carrito)*/
}

// COMPRAR (nos muestra el total de la compra)
// TODO:Redireccionar al carrito.html
function accionarCompra(){
    let total = 0
    carrito.forEach(item=>{
        total += item.precio
    })
    /* 
    console.log(carrito)
    console.log(total)*/
    alert("El costo total es: $ " + total)
}

/*-----------FILTRAR POR CATEGORIA------------ */

// solo LIBROS
function soloLibros(){
    let libros = productos.filter(producto=>producto.categoria=="libros")
    /*console.log(libros)*/
    document.getElementById("productos").innerHTML=""   
    generarCards(libros)
}
// solo ARTE
function soloArte(){
    let artes = productos.filter(producto=>producto.categoria=="arte")
    /*console.log(artes)*/
    document.getElementById("productos").innerHTML=""   
    generarCards(artes)
}
// solo TECNO
function soloTecno(){
    let tecno = productos.filter(producto=>producto.categoria=="tecno")
    /*console.log(tecno)*/
    document.getElementById("productos").innerHTML=""   
    generarCards(tecno)
}
// solo ALIMENTOS
function soloAlimentos(){
    let alimentos = productos.filter(producto=>producto.categoria=="alimento")
    /*console.log(alimentos)*/
    document.getElementById("productos").innerHTML=""   
    generarCards(alimentos)
}
// todos LOS PRODUCTOS
function todos(){
    document.getElementById("productos").innerHTML="" 
    generarCards(productos)
}
// MENOR PRECIO
function menorPrecio(){
    let menores = productos.filter(producto=>producto.precio<3000)
    /*console.log(menores)*/
    document.getElementById("productos").innerHTML=""   
    generarCards(menores)
}
