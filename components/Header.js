import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { mainColor } from '../styles/CommonStyles';

const styles = {
  headerBar: {
    width: "100%",
    height: 5,
    backgroundColor: mainColor,
  },
  header: {
    color: mainColor,
    fontSize: 19,
    margin: 3,
  },
};

const Header = () => (
  <View>
    <View style={styles.headerBar}></View>
    <View>
      <Text style={styles.header}> () OTL</Text>
    </View>
  </View>
);

export default Header;
