import React from 'react';
import { string, func } from 'prop-types';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import PrimaryHeader from 'components/common/PrimaryHeader';
import Footer from 'components/common/Footer';
import { getUser } from 'selectors/sessionSelector';
import { logout } from 'actions/userActions';
import translate from 'utils/i18n';
import styles from './styles';

const MainScreen = ({ username, logout }) => (
  <View style={styles.container}>
    <PrimaryHeader />
    <Text>Hey {username}, you&#39;re logged in!</Text>
    <Button
      onPress={logout}
      title={translate('MAIN_SCREEN.logout')}
    />
    <Footer />
  </View>
);

MainScreen.propTypes = {
  username: string.isRequired,
  logout: func.isRequired
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

MainScreen.navigatorStyle = {
  navBarHidden: true
};

const mapState = state => ({
  username: getUser(state).username
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(MainScreen);
