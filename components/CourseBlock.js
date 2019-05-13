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
  rowContainer: { flexDirection: 'row', marginVertical: 5 },
  tagText: { fontWeight: 'bold', marginRight: 20 },
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
    <View style={[styles.rowContainer, { marginBottom: 5 }]}>
      <Text style={styles.tagTextBold}>{course.title}</Text>
      <Text style={styles.tagText}>{course.old_code}</Text>
      <Text style={styles.tagText}>{course.grade_letter}</Text>
      <Text style={styles.tagText}>{course.load_letter}</Text>
      <Text style={styles.tagText}>{course.speech_letter}</Text>
    </View>
    <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
      <View style={styles.rowContainer}>
        <Text style={styles.tagText}>분류</Text>
        <Text style={styles.tagTextBold}>{`${course.department}, ${course.type}`}</Text>
        <Text style={styles.tagText}>교수</Text>
        <Text style={styles.tagTextBold}>{course.professors}</Text>
        <Text style={styles.tagText}>설명</Text>
        <Text style={styles.tagTextBold}>{course.summary}</Text>
      </View>
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
