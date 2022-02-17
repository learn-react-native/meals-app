import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
// import Colors from '../constants/colors';
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(item => item.categoryId.includes(catId));

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(item => item.id === catId);

  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
}

export default CategoryMealsScreen;
