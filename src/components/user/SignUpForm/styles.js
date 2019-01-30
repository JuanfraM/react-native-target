import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  redColor,
  blackColor,
  whiteColor,
  primaryFont
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 200,
    width: wp('80%')
  },
  error: {
    color: redColor,
    marginBottom: 2
  },
  buttonContainer: {
    backgroundColor: blackColor,
    height: hp('6%'),
    marginTop: 30,
    width: wp('40%')
  },
  buttonText: {
    color: whiteColor,
    fontSize: 11,
    fontFamily: primaryFont,
  },
  buttonSignInContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 1,
    height: hp('6%'),
    marginTop: hp('6%'),
    width: wp('41%')
  },
  buttonSignInText: {
    color: blackColor,
    fontSize: 11,
    fontFamily: primaryFont
  },
  pickerLabel: {
    color: blackColor,
    fontSize: 14,
    letterSpacing: 1.65
  },
  pickerText: {
    color: blackColor,
    fontSize: 14,
    letterSpacing: 1.5
  }
});

export default styles;
