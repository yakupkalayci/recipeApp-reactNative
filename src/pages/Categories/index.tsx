/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import axios from 'axios';

import CategoryCard from '../../components/CategoryCard';
import {Category, CategoriesResponse} from '../../types';

import styles from './Categories.style';

function Categories(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {data} = await axios.get<CategoriesResponse>(
          'https://www.themealdb.com/api/json/v1/1/categories.php',
        );
        setCategories(data.categories);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
      }
    };
    fetchCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <CategoryCard
            categoryName={item.strCategory}
            imgUrl={item.strCategoryThumb}
          />
        )}
        keyExtractor={item => item.idCategory}
      />
    </SafeAreaView>
  );
}

export default Categories;
