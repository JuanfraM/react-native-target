import { StyleSheet } from 'react-native';
import { whiteColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteColor,
    height: 37,
    width: 230,
    borderWidth: 1
  },
  text: {
    textAlign: 'center',
  }
});

export default styles;
