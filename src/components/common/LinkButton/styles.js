import { StyleSheet } from 'react-native';
import {
  blackColor,
  whiteColor,
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: whiteColor,
    justifyContent: 'center',
  },
  text: {
    color: blackColor,
    fontSize: 12,
    textAlign: 'center'
  }
});

export default styles;
