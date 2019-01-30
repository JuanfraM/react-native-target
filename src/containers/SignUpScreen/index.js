import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const SignUpScreen = () => (
  <View style={styles.container}>
    <Text>SIGN UP</Text>
  </View>
);

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

export default connect(null, null)(SignUpScreen);
