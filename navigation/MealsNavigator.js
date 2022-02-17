import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Tạo một bộ điều hướng hoặt động ở phía dưới
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// Tạo ra các mô hình điều hướng dựa trên bảng vẻ
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {

  },
  headerBackTitleStyle: {

  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Header',
};

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories!!!',
      // headerStyle: {
      //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      // },
      // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    //   },
    //   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    // }
  },
  MealDetail: MealDetailScreen
}, {
  // Default config
  // mode: 'modal',
  initialRouteName: 'Categories',
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ ...{ fontWeight: 'bold' } }}>Meals</Text> : 'Meals'
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ ...{ fontWeight: 'bold' } }}>Favorites</Text> : 'Favorites'
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: false,
    barStyle: {
      backgroundColor: Colors.primaryColor,
    }
  })
  : createBottomTabNavigator(
  tabScreenConfig,
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        // Label style in IOS
      }
    },
});

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen,
}, {
  // navigationOptions: {
  //   drawerLabel: 'Filters!'
  // },
  defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
    }
  },
  Filters: FilterNavigator,
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {

    }
  },
});

export default createAppContainer(MainNavigator);
