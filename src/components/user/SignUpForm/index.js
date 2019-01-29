import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Picker } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import translate from 'utils/i18n';
import { login } from 'actions/userActions';
import styles from './styles';
import { whiteColor } from '../../../constants/styleConstants';
import { screens } from '../../../constants/screenConstants';

const SignUpForm = ({ handleSubmit, error, navigator }) => {
  let gender = {gender: ''};
  const onPress = () => {
    navigator.push({
      screen: screens.signUp
    });
  };

  const updateGender = (g) => {
    gender = {gender: g}
  };

  return (
    <View style={styles.container} onSubmit={handleSubmit}>
      {error && <Text style={styles.error}>{error}</Text>}
      <Field
        name="name"
        label={translate('SIGN_UP.name')}
        component={Input}
      />
      <Field
        name="email"
        label={translate('SIGN_UP.email')}
        component={Input}
      />
      <Field
        name="password"
        label={translate('SIGN_UP.password')}
        component={Input}
        password
      />
      <Picker
        selectedValue={gender}
        style={styles.pickerContainer}
        itemStyle={styles.pickerText}
        onValueChange={updateGender}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <Button
        title={translate('SIGN_UP.title')}
        handleSubmit={user => login(user.toJS())}
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
      />
      <Button
        title={translate('SIGN_IN.title')}
        handleSubmit={onPress}
        underlayColor={whiteColor}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
      />
    </View>
  )
};

const { func, string, object } = PropTypes;

SignUpForm.propTypes = {
  navigator: object.isRequired,
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(SignUpForm);
