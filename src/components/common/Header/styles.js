import { StyleSheet, Platform } from 'react-native';
import { primaryFont } from 'constants/styleConstants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const marginDevice = Platform.OS == 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('10%'),
    marginTop: marginDevice,
    position: 'absolute',
    top: 0,
    width: wp('100%')
  },
  title: {
    fontFamily: primaryFont,
    fontSize: 13
  },
  leftContainer: {
    paddingLeft: 10
  },
  rightContainer: {
    paddingRight: 10
  },
});

export default styles;
