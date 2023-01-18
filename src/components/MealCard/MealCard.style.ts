import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

type MealsStyle = {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  secondContainer: ViewStyle;
};

export default StyleSheet.create<MealsStyle>({
  container: {
    marginBottom: 20,
    flex: 1,
    width: 380,
    height: 200,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  secondContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'right',
    color: '#fff',
  },
});
