import React from 'react';
import { string, func } from 'prop-types';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import MapView from 'react-native-maps';
import PrimaryHeader from 'components/common/PrimaryHeader';
import Footer from 'components/common/Footer';
import { getUser } from 'selectors/sessionSelector';
import { logout } from 'actions/userActions';
import styles from './styles';

const MainScreen = ({ username, logout }) => (
  <View style={styles.container}>
    <PrimaryHeader />
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
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
