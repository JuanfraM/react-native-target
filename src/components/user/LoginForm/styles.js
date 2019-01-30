import { StyleSheet } from 'react-native';
import {
  redColor,
  blackColor,
  whiteColor
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    flex: 1,
    top: 200,
    width: 210
  },
  formSection: {
    alignItems: 'center',
    flex: 1,
    width: 180
  },
  facebookSection: {
    alignItems: 'center',
    flex: 2,
    marginTop: 65,
    width: 210
  },
  error: {
    color: redColor
  },
  buttonContainer: {
    backgroundColor: blackColor,
    height: 37,
    marginTop: 10,
    width: 114
  },
  buttonText: {
    color: whiteColor,
    fontSize: 11,
  },
  linkForgotContainer: {
    height: 14,
    marginTop: 18
  },
  linkForgotText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 11,
  },
  linkFacebookContainer: {
    height: 17,
    width: 230
  },
  linkFacebookText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    letterSpacing: 3.5
  },
  signUpContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 1,
    height: 45,
    marginTop: 60,
    width: 120
  },
  signUpText: {
    color: blackColor,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 11,
    letterSpacing: 1.5
  }
});

export default styles;
