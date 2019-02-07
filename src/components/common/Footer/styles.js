import { StyleSheet } from 'react-native';
import { primaryFont } from 'constants/styleConstants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('10%'),
    position: 'absolute',
    bottom: 0,
    width: wp('100%')
  },
  title: {
    fontFamily: primaryFont,
    fontSize: 13
  }
});

export default styles;
