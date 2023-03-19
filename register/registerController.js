import { registerUser } from "./register.js"
import { isEmailValid } from "../utils/validEmail.js"
import { buildSpinnerView } from "../listado-anuncios/anunView.js";

export function registerController(formRegister) {
    formRegister.addEventListener('submit', async(event) =>{
        const spinnerSectionElement = document.querySelector('#spinnerSection')
        spinnerSectionElement.innerHTML = buildSpinnerView();
        event.preventDefault()

        const emailElement = formRegister.querySelector('#email')
        const spinnerElement = spinnerSectionElement.querySelector('.spinner');

        if(!isEmailValid(emailElement.value)) {
            alert('Email no es correcto')
            spinnerElement.classList.add('hide');
        }else{
            register(formRegister)
        }
    })

    async function register(formLogin) {
        const formData = new FormData(formLogin)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            await registerUser(email, password) 
            alert("Se ha registrado correctamente")
            window.location = '/'
        } catch (error) {
            alert('Se ha producido un error. Inténtelo de nuevo más tarde')
        }
    }

}