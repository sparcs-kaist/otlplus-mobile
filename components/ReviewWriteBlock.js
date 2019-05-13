import React, { PureComponent } from 'react';
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

export default class ReviewWriteBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.paddingBox}>
        <Text style={CommonStyles.boldText}></Text>
      </View>
    );
  }
}
