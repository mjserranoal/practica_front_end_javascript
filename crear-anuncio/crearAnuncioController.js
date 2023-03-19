import { buildSpinnerView } from "../listado-anuncios/anunView.js";
import { crearAnuncio } from "./crearAnuncio.js"

export const crearAnuncioController = async (formCrearAnuncioElement) => {
    formCrearAnuncioElement.addEventListener('submit', async (event) => {
        const spinnerSectionElement = document.querySelector('#spinnerSection')
        spinnerSectionElement.innerHTML = buildSpinnerView();
        event.preventDefault()
        const formData = new FormData(formCrearAnuncioElement)
        const spinnerElement = spinnerSectionElement.querySelector('.spinner');
        try {
            await crearAnuncio(formData)
            window.location = '/'
        } catch (error) {
            alert(error)
            spinnerElement.classList.add('hide');
        }
    })
}