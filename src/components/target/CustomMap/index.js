import React, { Component } from 'react';
import { object } from 'prop-types';
import MapView from 'react-native-maps';
import styles from './styles';

class CustomMap extends Component {
  constructor(props) {
    super(props);
    const { initialRegion } = this.props;
    this.state = { initialRegion };
  }

  render() {
    const { initialRegion } = this.state;

    return (
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      />
    );
  }
}

CustomMap.propTypes = {
  initialRegion: object
};

export default CustomMap;
