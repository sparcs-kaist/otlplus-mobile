import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import MildTouchable from './MildTouchable';
import { blockColor } from '../styles/CommonStyles';

const styles = {
  rowContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
  tagTextBold: { fontWeight: 'bold', marginRight: 5 },
  tagText: { marginRight: 5 },
  RectangleShapeView: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 1,
    marginVertical: 8,
  },
};

const CourseBlock = ({ course, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: blockColor,
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    }}
  >
    <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
      <View style={styles.rowContainer}>
        <Text style={styles.tagTextBold}>{course.title}</Text>
        <Text style={styles.tagText}>{course.old_code}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.tagText}>성적</Text>
        <Text style={styles.tagTextBold}>{course.grade_letter}</Text>
        <Text style={styles.tagText}>로드</Text>
        <Text style={styles.tagTextBold}>{course.load_letter}</Text>
        <Text style={styles.tagText}>강의</Text>
        <Text style={styles.tagTextBold}>{course.speech_letter}</Text>
      </View>
    </View>
    <View style={styles.RectangleShapeView} />
    <View style={[styles.rowContainer, { marginBottom: 8 }]}>
      <Text style={styles.tagTextBold}>분류</Text>
      <Text style={styles.tagText}>{`${course.department}, ${course.type}`}</Text>
    </View>
    <View style={[styles.rowContainer, { marginBottom: 8 }]}>
      <Text style={styles.tagTextBold}>교수</Text>
      <Text style={styles.tagText}>{course.professors}</Text>
    </View>
    <View style={[styles.rowContainer, { marginBottom: 8 }, { flex: 1 }]}>
      <Text style={styles.tagTextBold}>설명</Text>
      <Text style={styles.tagText}>{course.summary}</Text>
    </View>
  </TouchableOpacity>
);

CourseBlock.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    old_code: PropTypes.string.isRequired,
    grade_letter: PropTypes.string.isRequired,
    load_letter: PropTypes.string.isRequired,
    speech_letter: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    professors: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CourseBlock;
