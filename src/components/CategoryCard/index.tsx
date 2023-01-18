/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableWithoutFeedback, View, Image, Text} from 'react-native';

import { ScreenProps } from '../../pages/types';

import styles from './CategoryCard.style';

interface CategoryCardProps {
  categoryName: string;
  imgUrl: string;
  navigation: ScreenProps
}

function CategoryCard(props: CategoryCardProps): JSX.Element {
  const {categoryName, imgUrl, navigation} = props;

  const goToMeals = () => {
    navigation.navigate('Meals', {categoryName:categoryName});
  }

  return (
    <TouchableWithoutFeedback onPress={() => goToMeals()}>
        <View style={styles.container}>
            <Image source={{uri: imgUrl}} style={styles.image} />
            <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
