import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { signUp } from 'actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import imageSource from '../../assets/images/group.png';
import styles from './styles';

const SignUpScreen = ({ signUp, navigator }) => (
  <View style={styles.container}>
    <ImageBackground source={imageSource} style={styles.image}>
      <Text style={styles.textCenter}>TARGET MVD</Text>
    </ImageBackground>
    <SignUpForm onSubmit={user => signUp(user.toJS())} navigator={navigator} />
  </View>
);

const { func, object } = PropTypes;

SignUpScreen.propTypes = {
  signUp: func.isRequired,
  navigator: object.isRequired
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatch)(SignUpScreen);
