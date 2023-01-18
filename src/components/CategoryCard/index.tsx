/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableWithoutFeedback, View, Image, Text} from 'react-native';

import styles from './CategoryCard.style';

interface CategoryCardProps {
  categoryName: string;
  imgUrl: string;
}

function CategoryCard(props: CategoryCardProps): JSX.Element {
  const {categoryName, imgUrl} = props;

  return (
    <TouchableWithoutFeedback>
        <View style={styles.container}>
            <Image source={{uri: imgUrl}} style={styles.image} />
            <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
