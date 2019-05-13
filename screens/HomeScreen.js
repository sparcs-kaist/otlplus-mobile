import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import ReviewWriteBlock from '../components/ReviewWriteBlock';
import CommentBlock from '../components/CommentBlock';
import { mainColor, subColor } from '../styles/CommonStyles';

const styles = {
  mainPhoto: {
    height: 300,
    backgroundColor: 'gray',
  },
  descriptionText: {
    color: 'pink',
  },
  paddingBlock: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  background: {
    backgroundColor: subColor,
  },
  container: { flex: 1 },
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    courseToReview: {
      course: {
        title: '전산학 프로젝트',
      },
      lecture: {
        professor: '이준상',
        year: 2016,
        semester: 0,
      },
    },
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
    const { courseToReview, comments } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.background}>
          <View style={styles.mainPhoto} />
          <View style={styles.paddingBlock}>
            <ReviewWriteBlock {...courseToReview} />
          </View>
          <View style={styles.paddingBlock}>
            {comments.map(e => <CommentBlock key={e.id} comment={e} onPress={() => this._handleComponentTouch(e)} onLikePress={() => {}} onReportPress={() => {}} />)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
