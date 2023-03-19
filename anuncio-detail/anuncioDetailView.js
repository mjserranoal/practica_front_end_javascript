export const showAnuncioDetail = (anuncio) => {
    return `
    <div class="anuncio-caja">
        <img width="500px" src= "${(anuncio.imagen != "" ? anuncio.imagen : "https://herbolariosivana.com/sites/default/files/default_images/default_0.jpg")}"/> 
        <h2>${anuncio.nombre}</h2>
        <p>${anuncio.descripcion}</p>
        <p>${anuncio.precio} €</p>
        <p>${anuncio.compra_venta}</p>
        <button id="deleteAnuncio">borrar anuncio</button>
    </div>
    `
    
}