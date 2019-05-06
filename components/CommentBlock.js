import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import MildTouchable from './MildTouchable';

const styles = {
  rowContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
  tagTextBold: { fontWeight: 'bold', marginRight: 5 },
  tagText: { marginRight: 5 },
};

const semesterToString = (semester) => {
  if (typeof semester !== 'number' || semester < 1 || semester > 4) return null;
  const arr = ['봄', '여름', '가을', '겨울'];
  return arr[parseInt(semester, 10) - 1];
};

const CommentBlock = ({ comment, onPress, onLikePress, onReportPress }) => (
  <MildTouchable
    onPress={onPress}
    style={{
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    }}
  >
    <View style={[styles.rowContainer, { marginBottom: 5 }]}>
      <Text style={styles.tagTextBold}>{comment.name}</Text>
      <Text style={styles.tagText}>{comment.professor}</Text>
      <Text style={styles.tagText}>{comment.year}</Text>
      <Text style={styles.tagText}>{semesterToString(comment.semester)}</Text>
    </View>
    <Text style={{ marginBottom: 5 }}>{comment.comment}</Text>
    <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
      <View style={styles.rowContainer}>
        <Text style={styles.tagText}>추천</Text>
        <Text style={styles.tagTextBold}>{comment.like}</Text>
        <Text style={styles.tagText}>성적</Text>
        <Text style={styles.tagTextBold}>{comment.grade}</Text>
        <Text style={styles.tagText}>널널</Text>
        <Text style={styles.tagTextBold}>{comment.load}</Text>
        <Text style={styles.tagText}>강의</Text>
        <Text style={styles.tagTextBold}>{comment.speech}</Text>
      </View>
      <View style={styles.rowContainer}>
        <MildTouchable style={{ marginRight: 10 }} onPress={onReportPress}>
          <Text>신고하기</Text>
        </MildTouchable>
        <MildTouchable onPress={onLikePress}>
          <Text>좋아요</Text>
        </MildTouchable>
      </View>
    </View>
  </MildTouchable>
);

CommentBlock.defaultProps = {};

CommentBlock.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
};

export default CommentBlock;
