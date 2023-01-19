import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

type MealDetailStyleProps = {
  container: ViewStyle;
  image: ImageStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  innerContainer: ViewStyle;
  details: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
};

export default StyleSheet.create<MealDetailStyleProps>({
  container: {
    flex: 1,
    backgroundColor: '#eeeee4',
  },
  image: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    padding: 15,
    paddingBottom: 5,
  },
  title: {
    color: '#B93c10',
    fontWeight: 'bold',
    fontSize: 28,
  },
  subTitle: {
    color: '#B93c10',
    fontWeight: 'bold',
    fontSize: 18,
  },
  innerContainer: {
    borderColor: '#000',
    borderTopWidth: 1,
    paddingTop: 5,
    padding: 15,
  },
  details: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
    fontSize: 18,
    color: '#666',
  },
  button: {
    backgroundColor: 'red',
    height: 35,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    letterSpacing: 1.2,
    fontSize: 17,
  },
});
