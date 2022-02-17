import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(item => item.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFavorite = [...state.favoriteMeals];
        updatedFavorite.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavorite };
      }
      const meal = state.meals.find(item => item.id === action.mealId);
      return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
    default:
      return state;
  }
}

export default MealsReducer;
