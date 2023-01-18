/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';

import MealCard from '../../components/MealCard';

import {ScreenProps} from '../types';
import {Meal, MealsResponse} from '../../types';

import styles from './Meals.style';

function Meals({route, navigate}: ScreenProps): JSX.Element {
  const categoryName = route.params.categoryName;
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const {data} = await axios.get<MealsResponse>(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        );
        setMeals(data.meals);
      } catch (error) {}
    };
    fetchMeals();
  }, [categoryName]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({item}) => <MealCard title={item.strMeal} imageURL={item.strMealThumb} />}
      />
    </SafeAreaView>
  );
}

export default Meals;
