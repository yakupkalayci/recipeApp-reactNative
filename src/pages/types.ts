import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Categories: undefined;
  Meals: {
    categoryName: string;
  };
  MealDetail: {
    id: string;
  };
};

export type CategoriesProps = NativeStackScreenProps<
  RootStackParamList,
  'Categories'
>;

export type MealsProps = NativeStackScreenProps<RootStackParamList, 'Meals'>;
export type MealNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Meals'
>;

export type MealDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetail'
>;
