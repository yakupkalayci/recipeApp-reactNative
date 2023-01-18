import {StyleSheet, ViewStyle} from 'react-native';

type CategoriesStyle = {
  container: ViewStyle;
};

export default StyleSheet.create<CategoriesStyle>({
  container: {
    flex: 1,
    backgroundColor: '#Ffa53c',
    padding: 10,
  },
});
