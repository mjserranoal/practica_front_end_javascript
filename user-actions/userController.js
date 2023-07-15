import { decodeToken } from "../utils/decodeToken.js"
import { greetUser } from "./userActionView.js"
export function userController(userActionElement) {
    const token = localStorage.getItem("token")
    const closeSessionElement = userActionElement.querySelector("#closeSession")

    if(token) {
        const loginElement = userActionElement.querySelector("#loginLink") 
        const registerElement = userActionElement.querySelector("#registerLink")
        loginElement.remove()
        registerElement.remove()

        const infoToken = decodeToken(token)
        userActionElement.appendChild(greetUser(infoToken.username))

        closeSessionElement.addEventListener('click',() => {
        localStorage.removeItem("token")
        window.location.reload()
        })
    } else{
        const createAnuncioElement = userActionElement.querySelector("#crearAnuncioLink")
        createAnuncioElement.remove()
        closeSessionElement.remove()
    }
}