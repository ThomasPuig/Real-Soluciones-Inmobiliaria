const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('favoritos-boton')
const botonCerrar = document.getElementById('favoritoCerrar')
const modalFavorito = document.getElementsByClassName('modal-favorito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalFavorito.addEventListener('click', (event) => {
    event.stopPropagation()
})