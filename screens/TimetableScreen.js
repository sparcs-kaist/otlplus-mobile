import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import Timetable from '../components/Timetable';
import SearchSubject from '../components/SearchSubject';
import CommonStyles from '../styles/CommonStyles';

export default class TimetableScreen extends Component {
  state = {
    fullTimetable: false,
  };

  render() {
    const { state } = this;

    return (
      <SafeAreaView style={CommonStyles.container}>
        <View>
          <Text>OTL</Text>
        </View>
        <Timetable fullTimetable={state.fullTimetable} />
        <SearchSubject fullTimetable={state.fullTimetable} />
      </SafeAreaView>
    );
  }
}
