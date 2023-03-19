import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnunciosList } from "./anunView.js";

export async function anunciosListController(anunciosListElement) {
  anunciosListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios()


    alert ('Los anuncios se cargaron correctamente')


    if (anuncios.length > 0) {
      drawAnuncios(anuncios, anunciosListElement);
    } else {
      showEmptyMessage(anunciosListElement);
    }

  } catch (error) {
    
    alert ('No hemos podido cargar los anuncios')
  } finally {
    hideSpinner(anunciosListElement)
  }

}

function hideSpinner(anunciosListElement) {
  const spinnerElement = anunciosListElement.querySelector('.spinner');
  spinnerElement.classList.add('hide');

}

function drawAnuncios(anuncios, anunciosListElement) {
  for (const anuncio of anuncios) {
    const newAnuncioElement = buildAnuncioView(anuncio);
    anunciosListElement.appendChild(newAnuncioElement)
  }
}

function showEmptyMessage(anunciosListElement) {
  anunciosListElement.appendChild(buildEmptyAnunciosList());
}


