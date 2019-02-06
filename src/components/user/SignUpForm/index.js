import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import CustomPicker from 'components/common/CustomPicker';
import translate from 'utils/i18n';
import { whiteColor } from 'constants/styleConstants';
import { screens } from 'constants/screenConstants';
import styles from './styles';

const SignUpForm = ({ handleSubmit, error, navigator }) => {
  const redirectToSignIn = () => {
    navigator.push({
      screen: screens.login
    });
  };

  const genders = ['SELECT YOUR GENDER', 'male', 'female'];

  return (
    <View style={styles.container} onSubmit={handleSubmit}>
      {error && <Text style={styles.error}>{error}</Text>}
      <Field
        name="username"
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
      <Field
        name="gender"
        label={translate('SIGN_UP.gender')}
        component={CustomPicker}
        pickerContainer={styles.pickerContainer}
        pickerLabel={styles.pickerLabel}
        pickerText={styles.pickerText}
        selected={genders[0]}
        options={genders}
      />
      <Button
        title={translate('SIGN_UP.title')}
        onPress={handleSubmit}
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
      />
      <Button
        title={translate('SIGN_IN.title')}
        onPress={redirectToSignIn}
        underlayColor={whiteColor}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
      />
    </View>
  );
};

const { func, string, object } = PropTypes;

SignUpForm.propTypes = {
  navigator: object.isRequired,
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
