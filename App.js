import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens  } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsReducer from './store/reducers/meals';

enableScreens (false);

const rootReducer = combineReducers({
  meals: MealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
