/* eslint-disable prettier/prettier */

// React, react-native
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

// axios
import axios from 'axios';

// Components
import CategoryCard from '../../components/CategoryCard';

// API Ttypes
import {Category, CategoriesResponse} from '../../APItypes';


// React-navigation types
import {CategoriesProps} from '../types';

// Styles
import styles from './Categories.style';

function Categories({navigation}: CategoriesProps): JSX.Element {
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
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.idCategory}
      />
    </SafeAreaView>
  );
}

export default Categories;
