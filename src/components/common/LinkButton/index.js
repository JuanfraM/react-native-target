import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, ViewPropTypes } from 'react-native';
import styles from './styles';

const LinkButton = ({ onPress, containerStyle, textStyle, title }) => (
  <TouchableHighlight style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>
      {title}
    </Text>
  </TouchableHighlight>
);

const { string, func } = PropTypes;
const { style } = ViewPropTypes;

LinkButton.propTypes = {
  title: string,
  containerStyle: style,
  textStyle: Text.propTypes.style,
  onPress: func
};

export default LinkButton;
