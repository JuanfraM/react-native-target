import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { bool } from 'prop-types';
import Modal from 'react-native-modal';

import { targetPoints } from 'constants/targetPoints';
import styles from './styles';

const TargetTopics = ({ visible }) => {
  const itemList = item => (
    <View>
      <Image source={item.image} />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal isVisible={true} style={styles.modal}>
        <View style={styles.container}>
          <FlatList
            data={targetPoints}
            renderItem={({ item }) => itemList(item)}
          />
        </View>
      </Modal>
    </View>
  );
};

TargetTopics.propTypes = {
  visible: bool
};

export default TargetTopics;
