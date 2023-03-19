import { anuncioDetailController } from "./anuncioDetailController.js";

const anuncioDetailElement = document.querySelector('.anuncio-detail')
const params = new URLSearchParams(window.location.search)
const anuncioId = params.get("anuncioId")

if(!anuncioId) {
    window.location = '/'
}

anuncioDetailController(anuncioDetailElement, anuncioId)