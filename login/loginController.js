import { buildSpinnerView } from "../listado-anuncios/anunView.js";
import { isEmailValid } from "../utils/validEmail.js"
import { loginUser } from "./login.js"

export function loginController(formLogin) {
    formLogin.addEventListener('submit', (event) =>{
        const spinnerSectionElement = document.querySelector('#spinnerSection')
        spinnerSectionElement.innerHTML = buildSpinnerView();
        event.preventDefault()

        const emailElement = formLogin.querySelector('#email')
        const spinnerElement = spinnerSectionElement.querySelector('.spinner');
        if(!isEmailValid(emailElement.value)) {
            alert('Email no es correcto')
        }else{
            logUser(formLogin)
        }
        spinnerElement.classList.add('hide');
    })

    async function logUser(formLogin) {
        const formData = new FormData(formLogin)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const jwt = await loginUser(email, password) 
            localStorage.setItem('token', jwt)
            window.location = '/'
        } catch (error) {
            alert(error)
        }
    }
}