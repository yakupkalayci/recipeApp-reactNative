/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// React
import React from 'react';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail';

// React Navigation Types
import {RootStackParamList} from './pages/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTintColor: '#Ffa53c',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTintColor: '#Ffa53c',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{
            headerTintColor: '#Ffa53c',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
