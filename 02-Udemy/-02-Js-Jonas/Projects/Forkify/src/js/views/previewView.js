import View from './View';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  _parentElement = '';

  _successMsg = '';

  _generateMarkup() {
    const { recipeId, recipeTitle, recipePublisher, recipeImage } = this._data;
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link  ${
          recipeId === id ? 'preview__link--active' : ''
        }" href="#${recipeId}">
          <figure class="preview__fig">
            <img src="${recipeImage}" alt="${recipeTitle}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipeTitle}</h4>
            <p class="preview__publisher">${recipePublisher}</p>

          </div>
        </a>
      </li>`;
  }
}

export default new PreviewView();
