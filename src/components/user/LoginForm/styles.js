import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  redColor,
  blackColor,
  whiteColor,
  primaryFont,
  secondaryFont
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    flex: 1,
    marginTop: 19,
    top: 200,
    width: wp('80%')
  },
  formSection: {
    alignItems: 'center',
    flex: 1,
    width: wp('70%')
  },
  facebookSection: {
    alignItems: 'center',
    flex: 2,
    marginTop: hp('12%'),
    width: wp('80%')
  },
  error: {
    color: redColor
  },
  buttonContainer: {
    backgroundColor: blackColor,
    height: hp('6%'),
    marginTop: 10,
    width: wp('35%')
  },
  buttonText: {
    color: whiteColor,
    fontSize: 11,
  },
  linkForgotContainer: {
    height: hp('2%'),
    marginTop: 18
  },
  linkForgotText: {
    fontFamily: primaryFont,
    fontSize: 11,
  },
  linkFacebookContainer: {
    height: hp('3%'),
  },
  linkFacebookText: {
    fontFamily: secondaryFont,
    fontSize: 12,
    letterSpacing: 3.5
  },
  signUpContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 1,
    height: hp('7%'),
    marginTop: hp('7%'),
    width: wp('37%')
  },
  signUpText: {
    color: blackColor,
    fontFamily: primaryFont,
    fontSize: 11,
    letterSpacing: 1.5
  }
});

export default styles;
