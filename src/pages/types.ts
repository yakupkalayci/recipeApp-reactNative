import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  Categories: undefined;
  Meals: {
    categoryName: string;
  };
};

export type ScreenProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Categories'
>;
