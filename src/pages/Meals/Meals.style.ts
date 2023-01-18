import {StyleSheet, ViewStyle} from 'react-native';

type MealsStyle = {
  container: ViewStyle;
};

export default StyleSheet.create<MealsStyle>({
  container: {
    flex: 1,
    backgroundColor: '#Ffa53c',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
