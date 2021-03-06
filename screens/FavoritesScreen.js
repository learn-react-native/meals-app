import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

  const favMeals = availableMeals;

  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites!',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navData.navigation.openDrawer();
        }} />
      </HeaderButtons>
    )
  }
}

export default FavoritesScreen;
