import { buildSpinnerView } from "../listado-anuncios/anunView.js"
import { decodeToken } from "../utils/decodeToken.js"
import { deleteAnuncio, getAnuncioById } from "./anuncioDetail.js"
import { showAnuncioDetail } from "./anuncioDetailView.js"

export const anuncioDetailController = async(anuncioDetailElement, anuncioId) => {
    anuncioDetailElement.innerHTML = buildSpinnerView()
    try {
        const anuncio = await getAnuncioById(anuncioId)
        anuncioDetailElement.innerHTML = showAnuncioDetail(anuncio)
        
        manageDelete(anuncio, anuncioDetailElement)
    
    } catch (error) {
        alert(error)
        window.location = '/'
    }

    function manageDelete(anuncio, anuncioDetailElement) {
        const token = localStorage.getItem("token")   
        const deleteButton = anuncioDetailElement.querySelector('#deleteAnuncio')

        if(!token){
            deleteButton.remove()
        }else {
            const infoToken = decodeToken(token)
            
            if(anuncio.user_id == infoToken.userId) {
                deleteButton.addEventListener('click', async () => {
                    const answer = confirm("¿estás seguro que quieres borrar el anuncio?")
                    if(answer) {
                        await deleteAnuncio(anuncio.id)
                        window.location = '/'
                    }
                })
            }else {
                deleteButton.remove()
            }
        }

    }
}


