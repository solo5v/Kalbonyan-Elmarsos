import View from './View';
import icons from 'url:../../img/icons.svg';
import Fraction from 'fractional';

class RecipeViews extends View {
  _parentElement = document.querySelector('.recipe');

  _errorMsg = `We could not find that recipe. Please try another one!`;

  _successMsg = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;

      const { updateTo } = btn.dataset;

      if (+updateTo > 0) return handler(+updateTo);
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--bookmark');

      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    const {
      recipeCookingTime,
      recipeSourceUrl,
      recipeImage,
      recipeId,
      recipeTitle,
      recipePublisher,
      recipeServings,
      recipeIngredients,
      bookmarked,
    } = this._data;

    console.log(recipeImage);

    return `
    <figure class="recipe__fig" id="${recipeId}>
          <img src="${recipeImage}" alt="${recipeTitle}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipeTitle}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipeCookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipeServings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${
                recipeServings - 1
              }">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${
                recipeServings + 1
              }">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">

          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${bookmarked ? '-fill' : ' '}">
              </use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipeIngredients
            .map(({ quantity, unit, description }) => {
              return `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${
                  quantity ? new Fraction.Fraction(quantity).toString() : ''
                }</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${unit}</span>
                  ${description}
                </div>
              </li>
              `;
            })
            .join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipePublisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href=${recipeSourceUrl}
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
          `;
  }

  _generateIng() {}
}

export default new RecipeViews();
