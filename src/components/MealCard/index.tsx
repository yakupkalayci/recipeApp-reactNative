import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './MealCard.style';

interface MealCardProps {
  title: string;
  imageURL: string;
}

function MealCard(props: MealCardProps): JSX.Element {
  const {title, imageURL} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.image} />
      <View style={styles.secondContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
}

export default MealCard;
