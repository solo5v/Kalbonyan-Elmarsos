import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config';
import { getJSON, sendJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },

  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data; // {}

  return {
    recipeCookingTime: recipe.cooking_time,
    recipeSourceUrl: recipe.source_url,
    recipeImage: recipe.image_url,
    recipeId: recipe.id,
    recipeTitle: recipe.title,
    recipePublisher: recipe.publisher,
    recipeServings: recipe.servings,
    recipeIngredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  // -> Loading recipe
  try {
    const API_RESPONSE = await getJSON(`${API_URL}${id}`);

    state.recipe = createRecipeObject(API_RESPONSE);

    if (state.bookmarks.some(bookmark => bookmark.recipeId === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    //
  } catch (err) {
    console.error(`${err} 💣💣💣`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const API_RESPONSE = await getJSON(`${API_URL}?search=${query}`);
    console.log(API_RESPONSE);

    state.search.results = API_RESPONSE.data.recipes.map(recipe => {
      return {
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        recipePublisher: recipe.publisher,
        recipeImage: recipe.image_url,
      };
    });

    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.recipeIngredients.filter(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.recipeServings;

    // newQt = (oldQt * newServings) / oldServings(main-srv)
  });

  state.recipe.recipeServings = newServings;
};

export const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookMark = function (recipe) {
  // Add bookmark;
  state.bookmarks.push(recipe);

  console.log(state.bookmarks, 'All bookmarks');

  // Mark current recipe as bookmark;
  if (recipe.recipeId === state.recipe.recipeId) {
    state.recipe.bookmarked = true;
  }
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  console.log(id);
  const idx = state.bookmarks.findIndex(el => el.recipeId === id);
  state.bookmarks.splice(idx, 1);

  if (id === state.recipe.recipeId) state.recipe.bookmarked = false;
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');

  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};

// clearBookmarks()
//
//
//
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      cooking_time: +newRecipe.cookingTime,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(recipe);

    const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);

    state.recipe = createRecipeObject(data);

    addBookMark(state.recipe);
  } catch (err) {
    throw err;
  }
};
