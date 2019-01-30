import { StyleSheet } from 'react-native';
import {
  redColor,
  blackColor,
  whiteColor
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    top: 200,
    width: 80
  },
  error: {
    color: redColor
  },
  buttonContainer: {
    backgroundColor: blackColor,
    height: 37,
    marginTop: 30,
    width: 114
  },
  buttonText: {
    color: whiteColor,
    fontSize: 11,
  },
  buttonSignInContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 1,
    height: 37,
    marginTop: 19,
    width: 121
  },
  buttonSignInText: {
    color: blackColor,
    fontSize: 11,
  },
  pickerContainer: {
    backgroundColor: whiteColor,
    height: 37,
    width: 230,
    borderWidth: 1,
  },
  pickerText: {
    color: blackColor,
    fontSize: 12,
    textAlign: 'center'
  }
});

export default styles;
