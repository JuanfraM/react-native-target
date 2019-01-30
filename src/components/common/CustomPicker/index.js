import React, { Component } from 'react';
import { arrayOf, string, object } from 'prop-types';
import { View, Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import Picker from 'react-native-picker';
import styles from './styles';

class PickerScreen extends Component {
  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      selected
    };
  }

  showGenderPicker = () => {
    const { options, input } = this.props;
    const { selected } = this.state;
    Picker.init({
      pickerData: options,
      selectedValue: [selected],
      onPickerSelect: (pickedValue) => {
        const { onChange } = input;
        onChange(pickedValue[0]);
        this.setState({ selected: pickedValue });
      }
    });
    Picker.show();
  }

  render() {
    const { selected } = this.state;
    const { pickerContainer, pickerSection, pickerText, pickerLabel, label } = this.props;
    return (
      <View style={[styles.container, pickerContainer]}>
        <Text style={[styles.label, pickerLabel]}>{label}</Text>
        <View style={[styles.section, pickerSection]}>
          <TouchableOpacity style={styles.container} onPress={this.showGenderPicker}>
            <Text style={[styles.text, pickerText]}>{selected}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { style } = ViewPropTypes;

PickerScreen.propTypes = {
  options: arrayOf(string).isRequired,
  selected: string,
  input: object.isRequired,
  label: string,
  pickerContainer: style,
  pickerSection: style,
  pickerText: style,
  pickerLabel: style
};

export default PickerScreen;
