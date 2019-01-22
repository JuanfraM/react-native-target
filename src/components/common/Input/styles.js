import { StyleSheet } from 'react-native';
import { redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 11
  },
  label: {
    textAlign: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    textAlign: 'center',
    width: 230
  },
  error: {
    color: redColor
  }
});

export default styles;
