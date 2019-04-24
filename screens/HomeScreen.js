import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CourseBlock from '../components/CourseBlock';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    csCourses: [
      { name: '문해기', oldCode: 'CS202', classification: ['전산', '전선'], professors: ['a', 'b'], description: '개힘듬' },
      { name: '시프', oldCode: 'CS230', classification: ['전산', '전선'], professors: ['c', 'd'], description: '개쉬움' },
      { name: '알고개', oldCode: 'CS300', classification: ['전산', '전필'], professors: ['e', 'f'], description: '수업듣지마셈' },
    ],
  }

  _handleComponentTouch = (e) => {
    console.log(`${e.name} pressed!`);
  }

  render() {
    const { state } = this;
    return (
      <SafeAreaView>
        <ScrollView style={{ padding: 10 }}>
          {state.csCourses.map(e => <CourseBlock key={e.name} course={e} onPress={() => this._handleComponentTouch(e)} />)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
