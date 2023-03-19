export const crearAnuncio = async (FormData) => {
    const newAnuncio = {
        imagen: FormData.get('imagen'),
        nombre: FormData.get('nombre'),
        descripcion: FormData.get('descripcion'),
        precio:FormData.get('precio'),
        compra_venta: FormData.get('compra_venta')
    }

    const token = localStorage.getItem("token")
    const url = `http://localhost:8000/api/anuncios`
  
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newAnuncio)
    })

    if(!response.ok) {
        throw new Error('error creando el anuncio')
    }
}