import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { login } from 'actions/userActions';
import LoginForm from 'components/user/LoginForm';
import imageSource from 'assets/images/group.png';
import styles from './styles';

const LoginScreen = ({ login, navigator }) => (
  <View style={styles.container}>
    <ImageBackground source={imageSource} style={styles.image}>
      <Text style={styles.textCenter}>TARGET MVD</Text>
    </ImageBackground>
    <LoginForm onSubmit={user => login(user.toJS())} navigator={navigator} />
  </View>
);

const { func, object } = PropTypes;

LoginScreen.propTypes = {
  login: func.isRequired,
  navigator: object.isRequired
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

LoginScreen.navigatorStyle = {
  navBarHidden: true
};

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatch)(LoginScreen);
