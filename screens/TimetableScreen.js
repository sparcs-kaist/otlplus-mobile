import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Timetable from '../components/Timetable';
import SearchSubject from '../components/SearchSubject';
import Header from '../components/Header';
import CommonStyles, { subColor } from '../styles/CommonStyles';

const styles = {
  background: [
    CommonStyles.container,
    { backgroundColor: subColor },
  ],
};

export default class TimetableScreen extends Component {
  state = {
    fullTimetable: true,
  };

  render() {
    const { state } = this;

    return (
      <SafeAreaView style={styles.background}>
        <Header />
        <View style={CommonStyles.paddingBlock}>
          <Timetable fullTimetable={state.fullTimetable} />
        </View>
        <View>
          {/* <View>
            <SearchSubjectIcons />
          </View> */}
          <View style={CommonStyles.paddingBlock}>
            <SearchSubject fullTimetable={state.fullTimetable} />
          </View>
        </View>

      </SafeAreaView>
    );
  }
}
