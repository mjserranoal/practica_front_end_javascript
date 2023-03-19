export function buildAnuncioView(anuncio) {
    const newAnuncioElement = document.createElement('article');
    newAnuncioElement.classList.add('anuncio')
  
    newAnuncioElement.innerHTML = `
      <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
        <div class="anuncio-caja">
        <img width="500px" src= "${(anuncio.imagen != "" ? anuncio.imagen : "https://herbolariosivana.com/sites/default/files/default_images/default_0.jpg")}"/> 
        <h2>${anuncio.nombre}</h2>
        <p>${anuncio.descripcion}</p>
        <p>${anuncio.precio} €</p>
        <p>${anuncio.compra_venta}</p>
        </div>
      </a>
      `
    ;
  
    return newAnuncioElement;
  }
  
  export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }
  
  export function buildErrorLoadingAnuncios() {
    return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
  }
  
  export function buildEmptyAnunciosList() {
    return `<p>No hay resultados disponibles</p>`;
  }