import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, ViewPropTypes } from 'react-native';
import styles from './styles';

const Button = ({ onPress, containerStyle, textStyle, title, underlayColor }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.buttonContainer, containerStyle]}
    underlayColor={underlayColor}
  >
    <Text style={[styles.text, textStyle]}>
      {title}
    </Text>
  </TouchableHighlight>
);

const { string, func } = PropTypes;
const { style } = ViewPropTypes;

Button.propTypes = {
  title: string,
  underlayColor: string,
  containerStyle: style,
  textStyle: Text.propTypes.style,
  onPress: func
};

export default Button;
