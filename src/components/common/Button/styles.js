import { StyleSheet } from 'react-native';
import { blackColor, whiteColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: blackColor,
    justifyContent: 'center',
  },
  text: {
    color: whiteColor,
    fontSize: 11,
    textAlign: 'center',
  }
});

export default styles;
