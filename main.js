let inmueblesDisponibles = [
    {
        id:1,
        nombre:"Apto Punta Carretas",
        info:"Aapartamento con buenas dimensiones ne edificio nuevo sobre la rambla de Punta Carretas, con gran terraza frente al mar. 1 Dormitorio con vestidor, living comedor, ambos ambientes con salida a la terraza, cocina equipada, aire acondicionado, porteria 24hs y 1 cochera.  Valor:295.000 U$S. + 8.400$UY gastos comunes.",
        precio: "U$S 295.000",
        res: "...",
        img: './Fotos/Apto 1 RS.jpg'
    },
    {
        id:2,
        nombre:"Apto Malvin",
        info:"Edificio nuevo sobre rambla de Malvin, apartamento a estrenar! Apto contrafrente con preciosa y despejada vista a las torres de WTC. Cuenta con living comedor y cocina integrada, terraza social, 1 dormitorio y 1 baño. Edificio con espacio de Cowork y lavanderia.  Valor:158.000 U$S. + 4.450$UY Gastos comunes.",
        precio: "U$S 158.000",
        res: "...",
        img: './Fotos/Apto 2 RS.jpg'
    },
    {
        id:3,
        nombre:"Apto Cordon, Centro.",
        info:"Apartamento en Magallanes esq. Constituyente, zona demandada para renta. Apartamento de 2 domritorios y un baño a estrenar, living comedor con terraza al frente, cocina definida con terraza y lavadero. Ambientes muy iluminados.  Valor:147.000 U$S. + 4.500$UY Gastos comunes.",
        precio: "U$S 147.000",
        res: "...",
        img: './Fotos/Apto 3 RS.jpg'
    },
    {
        id:4,
        nombre:"Apto Nuevo Pocitos",
        info :"Apartamento de 52 m2 a estrenar! 1 Dormitorio, living comedor con terraza y garage para 1 vehiculo. Ubicado en nuevo pocitos a pasos del Montevideo Shopping y las torres del WTC.  Valor:185.000 U$S. + 3.100$UY Gastos comunes.",
        precio: "U$S 185.000",
        res: "...",
        img: './Fotos/Apto 4 RS.jpg'
    },
    {
        id:5,
        nombre:"Apto Pocitos",
        info :"Gran apartamento de 139m2 + 22m2 de terrazas. Living comedor con stufa a leña y salida a terraza con parrillero propio. 3 dormitorios y 3 baños, principal con baño en suite, yacuzzi y modernos placares. Vigilancia virtual las 24hs  Valor:398.000 U$S. + 15.000$UY Gastos comunes.",
        precio: "U$S 398.000",
        res: "...",
        img: './Fotos/Apto 5 RS.jpg'
    },
    {
        id:6,
        nombre:"Apto Aguada",
        info :"Apartamento ideal para inversores, muy buena renta. Zona cerca del centro, edificio con buena recepcion. Piso alto al frente, sumamente luminoso y despejado, living comedor con balcon, cocina semi definida con placares y terraza lavadero, dos domritorios con placares y baño.  Valor:159.000 U$S. + 3.100$UY Gastos comunes.",
        precio: "U$S 159.000",
        res: "...",
        img: './Fotos/Apto 6 RS.jpg'
    },];
    
    for (const ops of inmueblesDisponibles) {
        console.log(ops)
    }

    const contenedorInmuebles = document.getElementById('caja1')

    inmueblesDisponibles.forEach((inmueble) => {
        const div = document.createElement('div')
        div.classList.add('container')
        div.innerHTML=`
        <div id="card${inmueble.id}" class="card">
        <figure>
            <img src="${inmueble.img}" alt"">
        </figure>
        <div class="contenido">
            <h3> ${inmueble.nombre} </h3>
            <button id="${inmueble.id}">Mostrar descripcion</button>
            <button id="btn${inmueble.id}">Reseñas</button>
            <button id="favorito${inmueble.id}">FAV✨</button>
        </div>
    </div>`
    
        contenedorInmuebles.appendChild(div)

    })
    
    
    inmueblesDisponibles.forEach((inmueble) => {
        document.getElementById(`${inmueble.id}`).addEventListener("click", () => funcionBotones(inmueble));    
        document.getElementById(`btn${inmueble.id}`).addEventListener("click",  () => programarBotones(inmueble));
        document.getElementById(`favorito${inmueble.id}`).addEventListener("click", () => agregarAFavoritos(inmueble.id))
    }) 
       
    function funcionBotones(inmueble){
        console.log(inmueble.info);
        const card = document.getElementById(`card${inmueble.id}`)
        card.innerHTML=`
        <div id="card${inmueble.id}" class="card">
        <figure>
            <img src="${inmueble.img}" alt"">
        </figure>
        <div class="contenido">
            <h3> ${inmueble.info} </h3>
            <button id="${inmueble.id}">Ocultar descripcion</button>
            <button id="btn${inmueble.id}">Reseñas</button>
            <button id="favorito${inmueble.id}">FAV✨</button>
        </div>
    </div>`
    document.getElementById(`${inmueble.id}`).addEventListener("click", () => funcionDescripcion(inmueble), Swal.fire(
        `${inmueble.nombre}`,
        'Ha sido seleccionado',
        'success'
      ), )



    }

    function funcionDescripcion(inmueble){
        const card = document.getElementById(`card${inmueble.id}`)
        card.innerHTML=`
        <div id="card${inmueble.id}" class="card">
        <figure>
            <img src="${inmueble.img}" alt"">
        </figure>
        <div class="contenido">
            <h3> ${inmueble.nombre} </h3>
            <button id="${inmueble.id}">Mostrar descripcion</button>
            <button id="btn${inmueble.id}">Reseñas</button>
            <button id="favorito${inmueble.id}">FAV✨</button>
        </div>
    </div>`
    document.getElementById(`${inmueble.id}`).addEventListener("click",  () => funcionBotones(inmueble));
    document.getElementById(`btn${inmueble.id}`).addEventListener("click",  () => programarBotones(inmueble));
    document.getElementById(`favorito${inmueble.id}`).addEventListener("click", () => agregarAFavoritos(inmueble.id))
}

/*================================================================*/
   
// API //
    
 function programarBotones(){
fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error)=>console.log(error))
  .finally(console.log("TAREA EJECUTADA"));
 }

// API //

/*================================================================*/

//FAVORITOS//

let favoritos = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('favoritos')){
        favoritos = JSON.parse(localStorage.getItem('favoritos'))
        actualizarFavoritos()
    }
})

const contenedorFavoritos = document.getElementById('favoritos-contenedor')

const botonVaciar = document.getElementById('vaciar-favoritos')

const agregarAFavoritos = (inmuebleId) => {
    const item = inmueblesDisponibles.find((inmueble) => inmueble.id === inmuebleId)
    favoritos.push(item)
    actualizarFavoritos()
    console.log(favoritos)
}

botonVaciar.addEventListener('click', () => {
    favoritos.length = 0
    actualizarFavoritos()
})

const eliminarDeFavoritos = (inmuebleId) => {
    const item = favoritos.find((inmueble) => inmueble.id === inmuebleId)
    const indice = favoritos.indexOf(item)
    favoritos.splice(indice, 1)
    actualizarFavoritos()
}

const actualizarFavoritos = () => {
    contenedorFavoritos.innerHTML = "";


    favoritos.forEach((inmueble) => {
        const div = document.createElement('div')
        div.className = ('productoEnFavoritos')
        div.innerHTML = `
        <p>${inmueble.nombre}</p>
        <p>Precio: ${inmueble.precio}</p>
        <button onclick = "eliminarDeFavoritos(${inmueble.id})" class="boton-eliminar"><i class="fa-solid fa-trash"></i></button>
        `

        contenedorFavoritos.appendChild(div)

        localStorage.setItem('favoritos', JSON.stringify(favoritos))

    })
}





/*================================================================
BOTONES CON ALERTAS DE SWEETALERT PARA "AGENDAR VISITAS"!!!!!!!!!
==================================================================*/ 
//programarBotones()
    
//    function programarBotones() {
//        const boton = document.getElementById("btn1");
    
//        boton.addEventListener("click", () => {
//            datosUsuario();
//         }
//         )
//     }
    
//     function datosUsuario()
//     {
//         Swal.fire({
//             title: 'Ingrese su Nombre y numero de telefono',
//             input: 'text',
//             html: '<h4>Ejemplo: Thomas Thomas / 999 999 999</h4>',
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: 'Save',
//             denyButtonText: `Don't save`,
//         }).then((result) => {
//            /* Read more about isConfirmed, isDenied below */
//            if (result.isConfirmed) {
//            Swal.fire('Datos guardados con exito! Un agente se pondra en contacto con usted', '', 'success')
//            } else if (result.isDenied) {
//            Swal.fire('Los datos no han sido guardados!', '', 'info')
//            }})

//}
/*================================================================
BOTONES CON ALERTAS DE SWEETALERT PARA "AGENDAR VISITAS"!!!!!!!!!
==================================================================*/ 



/*================================================================
METODO QUE UTILICE EN ENTREGAS PRINCIPALES PARA MOSTRAR"!!!!!!!!!
==================================================================*/ 
//programarBotones()
//function programarBotones() {
    //const boton = document.getElementById("btn1");

//    boton.addEventListener("click", () => {
//        verapto1();
//}
//   )

//    const boton2 = document.getElementById("btn2");
//    boton2.onclick = () => {
//        verapto2();
//    }

//}

//function verapto1()
//{
//    let muestraUno = document.createElement("h2");
//    muestraUno.innerText=`El inmueble seleccionado es: Aapartamento 1: Piso 10, 3 habitaciones y 3 banos (1 en suite), ubicado sobre la costa, con piscina, gimnasio y cochera  Valor:220.000 U$S.`
//    document.body.appendChild(muestra);
//}


//function verapto2()
//{
//    let muestraDos = document.createElement("h2");
//    muestraDos.innerText=`Aapartamento 2: Piso 5, 1 habitacion y  1.5 banos, ubicado a 5km del centro de la ciudad, cuenta con cochera  Valor:150.000 U$S.`
//    document.body.appendChild(muestra);
//}

/*================================================================
METODO QUE UTILICE EN ENTREGAS PRINCIPALES PARA MOSTRAR"!!!!!!!!!
==================================================================*/

