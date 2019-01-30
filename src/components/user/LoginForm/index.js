import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import LinkButton from 'components/common/LinkButton';
import translate from 'utils/i18n';
import { whiteColor } from 'constants/styleConstants';
import { screens } from 'constants/screenConstants';
import styles from './styles';

const LoginForm = ({ handleSubmit, error, navigator }) => {
  const redirectToSignUp = () => {
    navigator.push({
      screen: screens.signUp
    });
  };

  return (
    <View style={styles.login} onSubmit={handleSubmit}>
      <View style={styles.formSection}>
        {error && <Text style={styles.error}>{error}</Text>}
        <Field
          name="email"
          label={translate('SIGN_IN.email')}
          component={Input}
        />
        <Field
          name="password"
          label={translate('SIGN_IN.password')}
          component={Input}
          password
        />
        <Button
          title={translate('SIGN_IN.button')}
          onPress={handleSubmit}
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
        />
        <LinkButton
          title={translate('SIGN_IN.forgotPassword')}
          containerStyle={styles.linkForgotContainer}
          textStyle={styles.linkForgotText}
        />
      </View>
      <View style={styles.facebookSection}>
        <LinkButton
          title={translate('SIGN_IN.connectFacebook')}
          containerStyle={styles.linkFacebookContainer}
          textStyle={styles.linkFacebookText}
        />
        <Button
          title={translate('SIGN_UP.title')}
          onPress={redirectToSignUp}
          underlayColor={whiteColor}
          containerStyle={styles.signUpContainer}
          textStyle={styles.signUpText}
        />
      </View>
    </View>
  );
};

const { func, string, object } = PropTypes;

LoginForm.propTypes = {
  navigator: object.isRequired,
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
