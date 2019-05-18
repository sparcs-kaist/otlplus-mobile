import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import CommonStyles, { blockColor } from '../styles/CommonStyles';

const styles = {
  paddingBox: {
    padding: 10,
    backgroundColor: blockColor,
  },
};

const ReviewWriteBlock = () => (
  <View style={styles.paddingBox}>
    <Text style={CommonStyles.boldText}></Text>
  </View>
);

export default ReviewWriteBlock;
