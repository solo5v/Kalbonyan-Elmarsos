'use strict';

const getElement = (selector = 'undifiend') => {
  return document.querySelector(selector);
};

const form = getElement('.form');
const containerWorkouts = getElement('.workouts');
const inputType = getElement('.form__input--type');
const inputDistance = getElement('.form__input--distance');
const inputDuration = getElement('.form__input--duration');
const inputCadence = getElement('.form__input--cadence');
const inputElevation = getElement('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // min /km
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #mapZoomLv = 13;
  #workouts = [];

  constructor() {
    this._getPosition();

    this._getLocalStorage();
    form.addEventListener('submit', this._showForm.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _hideForm() {
    [inputDistance, inputDuration, inputCadence, inputElevation].forEach(
      input => (input.value = '')
    );
    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
        alert('Could not get the loaction')
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLv);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // HANDLING CLICK ON MAP
    this.#map.on('click', mapE => {
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
      this._renderWrokoutMarker(work);
    });
  }

  _showForm(e) {
    e.preventDefault();

    // check if data is valid === number;
    const validInputs = inputs => inputs.every(inp => Number.isFinite(inp));

    const allPostive = inputs => inputs.every(inp => inp > 0);

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // check if  type of workout == running
    if (type === 'running') {
      const cadence = +inputCadence.value;
      const runningInputs = [distance, duration, cadence];

      if (!validInputs(runningInputs) || !allPostive(runningInputs)) {
        return alert('please enter a position number');
      }

      workout = new Running([lat, lng], ...runningInputs);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation;
      const cyclingInputs = [distance, duration, elevation];
      if (!validInputs(cyclingInputs) && !allPostive([distance, duration]))
        return alert('enter a valid number:)');

      workout = new Cycling([lat, lng], ...cyclingInputs);
    }

    this.#workouts.push(workout);

    this._renderWrokoutMarker(workout);
    this._renderWorkout(workout);

    // clear input
    this._hideForm();

    this._setLocalStorage();
  }

  _toggleElevationField() {
    [inputElevation, inputCadence].forEach(input =>
      input.closest('.form__row').classList.toggle('form__row--hidden')
    );
  }

  _renderWrokoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidht: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(workout.description)
      .openPopup();
  }

  _renderWorkout(workout) {
    let markup = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if (workout.type === 'running') {
      markup += `
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">4.6</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">178</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
      `;
    }

    if (workout.type === 'cycling') {
      markup += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevation}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>
      `;
    }

    containerWorkouts.insertAdjacentHTML('beforeend', markup);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLv, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
}

const app = new App();

/**
 * - Get data from for  m =>
 *  1. type ,f
 *  2. distance,
 *  3. duration
 *  . inputs value
 *
 *
 * - check if  type of workout == running, create running obj; => the same with Cycling workout
 * running = cadence-input;
 * Cycling = elevation-input;
 *
 * - check if data is valid === number;
 *
 *
 * - render workout(obj) =>
 * creeate the html markup as you have;
 *e.target.closest(".active")
 *
 *
 */
