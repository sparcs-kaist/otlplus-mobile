import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import Timetable from '../components/Timetable';
import List from '../components/List';
import CommonStyles from '../styles/CommonStyles';

const styles = {
  topMenu: {
    flexDirection: 'row',
  },
};

export default class TimetableScreen extends Component {
  state = {}

  render() {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <View style={styles.topMenu}>
          <Text>Area for OTL Logo</Text>
          {/* OTL Logo */}
          <Text>Area for 삼선 Menu</Text>
          {/* Little Menu */}
        </View>
        <Timetable />
        <List />
      </SafeAreaView>
    );
  }
}
