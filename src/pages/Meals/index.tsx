/* eslint-disable prettier/prettier */

// React, react-native
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

// axios
import axios from 'axios';

// Components
import MealCard from '../../components/MealCard';

// API Ttypes
import {Meal, MealsResponse} from '../../APItypes';

// React-navigation types
import {MealsProps} from '../types';

// Styles
import styles from './Meals.style';

function Meals({route, navigation}: MealsProps): JSX.Element {
  const categoryName = route.params.categoryName;
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const {data} = await axios.get<MealsResponse>(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        );
        setMeals(data.meals);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
      }
    };
    fetchMeals();
  }, [categoryName]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({item}) => <MealCard title={item.strMeal} imageURL={item.strMealThumb} navigation={navigation} id={item.idMeal} />}
      />
    </SafeAreaView>
  );
}

export default Meals;
