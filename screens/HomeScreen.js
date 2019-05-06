import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CommentBlock from '../components/CommentBlock';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    semester: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
    load: PropTypes.string.isRequired,
    speech: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  onReportPress: PropTypes.func.isRequired,
  onLikePress: PropTypes.func.isRequired,
  */
  state = {
    csCourses: [
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
    const { state } = this;
    return (
      <SafeAreaView>
        <ScrollView style={{ padding: 10 }}>
          {state.csCourses.map(e => <CommentBlock key={e.id} comment={e} onPress={() => this._handleComponentTouch(e)} onLikePress={() => {}} onReportPress={() => {}} />)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
