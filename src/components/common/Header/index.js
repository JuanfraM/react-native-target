import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { string, node, func } from 'prop-types';
import styles from './styles';

const Header = ({ leftContainer, title, rightContainer, handleLeftPress, handleRightPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight onPress={handleLeftPress}>
      <View style={styles.leftContainer}>{leftContainer}</View>
    </TouchableHighlight>
    <Text style={[styles.title]}>{title}</Text>
    <TouchableHighlight onPress={handleRightPress}>
      <View style={styles.rightContainer}>{rightContainer}</View>
    </TouchableHighlight>
  </View>
);

Header.propTypes = {
  title: string,
  leftContainer: node,
  rightContainer: node,
  handleLeftPress: func,
  handleRightPress: func
};

export default Header;
