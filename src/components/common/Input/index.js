import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, ViewPropTypes } from 'react-native';
import styles from './styles';

const Input = (
  { input: { onChange, ...restInput },
    autoCapitalize = 'none',
    inputContainer,
    password = false,
    label,
    meta: { touched, error }
  }
) => (
  <View style={[styles.inputContainer, inputContainer]}>
    {label && <Text style={styles.label}>{label}</Text>}
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize={autoCapitalize}
        onChangeText={onChange}
        secureTextEntry={password}
        {...restInput}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  </View>
);

const { string, object, bool } = PropTypes;
const { style } = ViewPropTypes;

Input.propTypes = {
  input: object.isRequired,
  inputContainer: style,
  label: string,
  autoCapitalize: string,
  meta: object,
  password: bool
};

export default Input;
