import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMsg();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // ;
    //
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderErrorMsg();

    this._data = data;
    const newMarkup = this._generateMarkup();
    // -> Create a New-markup but (!not-render-it)
    // => what will do is:
    //    - generate this MARKUP & Then compare that new HTML TO THE CURRENT HTML &
    //    - then we will update ONLY text & attributes in the DOM =>
    //        from the old-version to the new-version

    // *)
    //    - So here we have the new-markup, but that is just a string & it will be difficult to compare the dom-elements;
    //    - So to fix that problem, => we will convert the (new-markup-string) =>
    //      to the DOM-OBJ
    //
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElements = Array.from(newDOM.querySelectorAll('*'));

    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );

    newElements.forEach((newEl, i) => {
      const currEl = currentElements[i];

      const updateChangedTxtCondition =
        !newEl.isEqualNode(currEl) && newEl.firstChild?.nodeValue.trim() !== '';

      const updateChangedAtrriCondition = !newEl.isEqualNode(currEl);

      switch (true) {
        case updateChangedTxtCondition:
          return (currEl.textContent = newEl.textContent);

        case updateChangedAtrriCondition:
          return Array.from(newEl.attributes).forEach(attr =>
            currEl.setAttribute(attr.name, attr.value)
          );

        default:
          return;
      }

      // // Updates changed TEXT;
      // if (
      //   !newEl.isEqualNode(currEl) &&
      //   newEl.firstChild?.nodeValue.trim() !== ''
      // ) {
      //   currEl.textContent = newEl.textContent;
      // }

      // // Updates changed Attributes;

      // if (!newEl.isEqualNode(currEl)) {
      //   Array.from(newEl.attributes).forEach(attr =>
      //     currEl.setAttribute(attr.name, attr.value)
      //   );
      // }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderErrorMsg(msg = this._errorMsg) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${msg}</p>
      </div>
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSuccessMsg(msg = this._successMsg) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${msg}</p>
      </div>
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
