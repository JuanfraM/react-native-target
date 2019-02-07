import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import newTargetImage from 'assets/images/newTarget.png';
import styles from './styles';

const Footer = () => {
  const openTargetOptions = () => {
    console.log('redirect to');
  };
  return (
    <View style={[styles.container]}>
      <TouchableHighlight onPress={openTargetOptions}>
        <Image source={newTargetImage} style={styles.image} />
      </TouchableHighlight>
      <Text style={[styles.title]}>CREATE NEW TARGET</Text>
    </View>
  );
};

export default Footer;
