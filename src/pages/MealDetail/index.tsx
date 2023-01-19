/* eslint-disable prettier/prettier */
// React, React-Native
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

// axios
import axios from 'axios';

// API Types
import {MealDetail2, MealDetailResponse} from '../../APItypes';

// React-Navigation Types
import {MealDetailProps} from '../types';

// Styles
import styles from './MealDetail.style';

function MealDetail({route, navigation}: MealDetailProps): JSX.Element {
  const id = route.params.id;
  const [meal, setMeal] = useState<MealDetail2>();

  const openOnYoutube = (url: string) => {
    Linking.openURL(url);
  };

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const {data} = await axios.get<MealDetailResponse>(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setMeal(data.meals[0]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
      }
    };
    fetchMeal();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{uri: meal?.strMealThumb}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{meal?.strMeal}</Text>
          <Text style={styles.subTitle}>{meal?.strArea}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.details}>{meal?.strInstructions}</Text>
          {meal?.strYoutube && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => openOnYoutube(meal?.strYoutube)}>
              <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MealDetail;
