import { anunciosListController } from "./listado-anuncios/listAnunControll.js"
import { userController } from "./user-actions/userController.js"

const anunciosListElement = document.querySelector('.anuncios-list')
const userActionElement = document.querySelector('.user-actions')


anunciosListController(anunciosListElement)
userController(userActionElement)