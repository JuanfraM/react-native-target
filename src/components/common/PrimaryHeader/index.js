import React from 'react';
import { Image } from 'react-native';
import Header from 'components/common/Header';
import userImage from 'assets/images/user.png';
import bubbleImage from 'assets/images/bubble.png';
import styles from './styles';

const PrimaryHeader = () => {
  const redirectToMyProfile = () => {
    console.log('redirect to');
  };

  const redirectToChat = () => {
    console.log('redirect to');
  };

  return (
    <Header
      handleLeftPress={redirectToMyProfile}
      leftContainer={
        <Image source={userImage} style={styles.leftImage} />
      }
      title="Target Points"
      rightContainer={
        <Image source={bubbleImage} style={styles.rightImage} />
      }
      handleRightPress={redirectToChat}
    />
  );
};

export default PrimaryHeader;
