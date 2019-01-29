import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { login } from 'actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import imageSource from '../../assets/images/group.png';
import styles from './styles';

const SignUpScreen = ({ login, navigator }) => (
  <View style={styles.container}>
    <ImageBackground source={imageSource} style={styles.image}>
      <Text style={styles.textCenter}>TARGET MVD</Text>
    </ImageBackground>
    <SignUpForm onSubmit={user => login(user.toJS())} navigator={navigator} />
  </View>
);

const { func } = PropTypes;

SignUpScreen.propTypes = {
  login: func.isRequired
};

SignUpScreen.navigationOptions = {
  title: 'Log Up'
};

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatch)(SignUpScreen);
