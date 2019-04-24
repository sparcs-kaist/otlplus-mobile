import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  rowContainer: { flexDirection: 'row', marginVertical: 5 },
  tagText: { fontWeight: 'bold', marginRight: 20 },
};

const CourseBlock = ({ course, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    }}
  >
    <View style={styles.rowContainer}>
      <Text style={styles.tagText}>{course.name}</Text>
      <Text>{course.oldCode}</Text>
    </View>
    <View style={{ height: 1, backgroundColor: 'black' }} />
    <View>
      <View style={styles.rowContainer}>
        <Text style={styles.tagText}>분류</Text>
        <Text>asdf</Text>
      </View>
    </View>
    <View style={styles.rowContainer}>
      <Text style={styles.tagText}>교수</Text>
      <Text>asdf</Text>
    </View>
    <View style={styles.rowContainer}>
      <Text style={styles.tagText}>설명</Text>
      <Text>asdf</Text>
    </View>
  </TouchableOpacity>
);

CourseBlock.defaultProps = {};

CourseBlock.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    oldCode: PropTypes.string.isRequired,
    classification: PropTypes.arrayOf(PropTypes.string).isRequired,
    professors: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CourseBlock;
