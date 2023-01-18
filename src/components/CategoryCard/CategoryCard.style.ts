import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type CategoryCardStyle = {
  container: ViewStyle;
  categoryName: TextStyle;
  image: ImageStyle;
};

export default StyleSheet.create<CategoryCardStyle>({
  container: {
    backgroundColor: '#eeeee4',
    marginBottom: 10,
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 21,
    color: '#000',
    marginLeft: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
});
