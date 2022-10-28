import * as model from './model';
import recipeViews from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';
import { MODEL_CLOSE_SEC } from './config';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// ------ RECIPE-HANDLER -------

const controlRcipe = async function () {
  // -> return a <promise>

  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeViews.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeViews.render(model.state.recipe);
  } catch (err) {
    // recipeViews.renderError(`${err} 💣💣💣`);
    recipeViews.renderErrorMsg();
  }
};

// ------ SEARCH-HANDLER -------

const controlSearchResults = async function () {
  try {
    // 1. Get Search Query;
    const query = searchView.getQuery();

    if (!query) return;
    resultsView.renderSpinner();

    // 2. Load search results;
    await model.loadSearchResults(query);

    // 3. Render results;
    resultsView.render(model.getSearchResultsPage());

    // 4. Render initial pagination buttons;
    paginationView.render(model.state.search);

    //
    // bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    throw err;
  }
};

const controlPagination = function (gotoPage) {
  // 1. Render NEW results;
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // 2. Render NEW initial pagination buttons;
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // UPdate the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view;
  console.log(model.state.recipe);
  // recipeViews.render(model.state.recipe);
  recipeViews.update(model.state.recipe);
};

const controlAddBookMark = function () {
  // 1. Add or remove bookmark

  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.recipeId);

  // 2. Update recipe view;
  recipeViews.update(model.state.recipe);

  // 3. Render bookmarks;
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  // Upload the new recipe data
  try {
    await model.uploadRecipe(newRecipe);

    recipeViews.render(model.state.recipe);

    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💣', err);
    addRecipeView.renderErrorMsg(err.message);
  }
};

const init = () => {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeViews.addHandlerRender(controlRcipe);
  recipeViews.addHandlerUpdateServings(controlServings);
  recipeViews.addHandlerAddBookmark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

export const uploadRecipe = async function () {};
