export const getAnuncioById = async (anuncioId) => {
    const anuncioUrl = `http://localhost:8000/api/anuncios/${anuncioId}`;
  
    const response = await fetch(anuncioUrl);

    if(!response.ok) {
        throw new Error('El anuncio no existe')
    }
    
    const anuncio = await response.json()
  
    return anuncio
}

export const deleteAnuncio = async (anuncioId) => {
    const token = localStorage.getItem("token")
    const anuncioUrl = `http://localhost:8000/api/anuncios/${anuncioId}`;
  
     await fetch(anuncioUrl, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        }
    })
}