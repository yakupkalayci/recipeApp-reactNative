/* eslint-disable prettier/prettier */
// React, react-native
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

// React-navigation types
import {MealNavigationProp} from '../../pages/types';

// Styles
import styles from './MealCard.style';

interface MealCardProps {
  id: string;
  title: string;
  imageURL: string;
  navigation: MealNavigationProp;
}

function MealCard(props: MealCardProps): JSX.Element {
  const {id, title, imageURL, navigation} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MealDetail', {id: id})}>
      <Image source={{uri: imageURL}} style={styles.image} />
      <View style={styles.secondContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MealCard;
