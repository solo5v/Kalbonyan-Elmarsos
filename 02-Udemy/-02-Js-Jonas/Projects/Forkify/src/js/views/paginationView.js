import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  generateMarkupBtn(currpage, status) {
    if (status === 'next') {
      return `
      <button data-goto="${
        currpage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${currpage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
      `;
    } else if (status === 'prev') {
      return `
      <button data-goto="${
        currpage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currpage - 1}</span>
      </button>
      `;
    } else {
      return `
        <button data-goto="${
          currpage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currpage - 1}</span>
        </button>

        <button data-goto="${
          currpage + 1
        }" class="btn--inline pagination__btn--next">
        <span>Page ${currpage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }
  } // Need to refactor;

  _generateMarkup() {
    const currentPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    switch (true) {
      // Page 1, and other;
      case currentPage === 1 && numPages > 1:
        return this.generateMarkupBtn(currentPage, 'next');

      // Last page;
      case currentPage === numPages && numPages > 1:
        return this.generateMarkupBtn(currentPage, 'prev');

      // Other page;
      case currentPage < numPages:
        return this.generateMarkupBtn(currentPage, 'twice');

      default:
        return '';
    }
  }
}

export default new PaginationView();
