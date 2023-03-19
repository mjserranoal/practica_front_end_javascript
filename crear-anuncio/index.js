import { crearAnuncioController } from "./crearAnuncioController.js"
const token = localStorage.getItem('token')

if (!token) {
    window.location ='/'
}else {
    const formCrearAnuncioElement = document.querySelector('#formCrearAnuncio')
    crearAnuncioController(formCrearAnuncioElement)
}