import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import CommonStyles, { blockColor } from '../styles/CommonStyles';

const styles = {
  paddingBox: {
    padding: 10,
    backgroundColor: blockColor,
  },
};

export default class ReviewWriteBlock extends Component {
  static propTypes = {
    course: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    lecture: PropTypes.shape({
      professor: PropTypes.string,
      year: PropTypes.number,
      semester: PropTypes.number,
    }).isRequired,
  }

  state = {}

  render() {
    const { course, lecture } = this.props;
    return (
      <View style={styles.paddingBox}>
        <Text style={CommonStyles.boldText}>{course.title}</Text>
        <Text style={CommonStyles.text}>{lecture.professor}</Text>
      </View>
    );
  }
}

export default ReviewWriteBlock;
