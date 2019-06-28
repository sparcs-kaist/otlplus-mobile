import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import CommentBlock from '../components/CommentBlock';
import CourseBlock from '../components/CourseBlock';
import AcademicScheduleSection from '../components/AcademicScheduleSection';
import CommonStyles, { subColor } from '../styles/CommonStyles';

const styles = {
  mainPhoto: {
    height: 300,
    backgroundColor: 'gray',
  },
  descriptionText: {
    color: 'pink',
  },
  background: {
    backgroundColor: subColor,
  },
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    courses: [
      {
        id: 1,
        title: '전산학프로젝트',
        department: '전산학부',
        old_code: 'CS3XX',
        grade_letter: 'B',
        load_letter: 'F',
        speech_letter: 'F',
        type: '전공선택',
        professors: '뫄뫄뫄,솨솨솨',
        summary: '과목요약~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
      },
      {
        id: 2,
        title: '알고리즘설계와해석',
        department: '전산학부',
        old_code: 'CS3YY',
        grade_letter: 'A',
        load_letter: 'A',
        speech_letter: 'D',
        type: '전공선택',
        professors: '뫄뫄뫄,솨솨솨',
        summary: '과목요약~~~~~~~~~~~~~~~~~~~~~~~~~',
      },
    ],
    comments: [
      {
        id: 1,
        name: '전산학 프로젝트',
        professor: '이준상',
        year: 2016,
        semester: 1,
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        like: 54,
        grade: 'B',
        load: 'F',
        speech: 'F',
      },
      {
        id: 2,
        name: '알고리즘설계와해석',
        professor: '마틴 지글러',
        year: 2018,
        semester: 1,
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        like: 4,
        grade: 'A',
        load: 'A',
        speech: 'D',
      },
    ],
  }

  _handleComponentTouch = (e) => {
    console.log(`${e.name} pressed!`);
  }

  render() {
    const { courses, comments } = this.state;
    return (
      <SafeAreaView style={CommonStyles.container}>
        <ScrollView style={styles.background}>
          <View style={styles.mainPhoto}></View>
          <View style={CommonStyles.paddingBlock}>
            <AcademicScheduleSection />
          </View>
          <View style={CommonStyles.paddingBlock}>
            {comments.map(e => <CommentBlock key={e.id} comment={e} onPress={() => this._handleComponentTouch(e)} onLikePress={() => {}} onReportPress={() => {}} />)}
            {courses.map(e => <CourseBlock key={e.id} course={e} onPress={() => this._handleComponentTouch(e)} onLikePress={() => {}} onReportPress={() => {}} />)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
