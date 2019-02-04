import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    width: wp('80%')
  },
  error: {
    color: redColor
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
  },
  buttonSignInContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 1,
    height: hp('6%'),
    marginTop: 19,
    width: wp('41%')
  },
  buttonSignInText: {
    color: blackColor,
    fontSize: 11,
  },
  pickerContainer: {
    backgroundColor: whiteColor,
    height: hp('37%'),
    width: wp('230%'),
    borderWidth: 1,
  },
  pickerText: {
    color: blackColor,
    fontSize: 12,
    textAlign: 'center'
  }
});

export default styles;
