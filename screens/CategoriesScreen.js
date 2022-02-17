import React from 'react';
import {
  FlatList,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
// import Colors from '../constants/colors';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id,
            }
          });
        }}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    // headerStyle: {
    //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='menu' iconName='ios-menu' onPress={() => {
          navData.navigation.openDrawer();
        }} />
      </HeaderButtons>
    )
  }
};

export default CategoriesScreen;
