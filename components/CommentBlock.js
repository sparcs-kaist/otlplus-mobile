import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import MildTouchable from './MildTouchable';
import CommonStyles, { mainColor, blockColor } from '../styles/CommonStyles';
import { semesterToString } from '../api/internalAPI';

const styles = {
  rowContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
  marginRight: { marginRight: 5 },
};

const CommentBlock = ({ comment, onPress, onLikePress, onReportPress }) => (
  <MildTouchable
    onPress={onPress}
    style={{
      backgroundColor: blockColor,
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    }}
  >
    <View style={[styles.rowContainer, { marginBottom: 5 }]}>
      <Text style={[CommonStyles.boldText, styles.marginRight]}>{comment.name}</Text>
      <Text style={[CommonStyles.text, styles.marginRight]}>{comment.professor}</Text>
      <Text style={[CommonStyles.text, styles.marginRight]}>{comment.year}</Text>
      <Text style={[CommonStyles.text, styles.marginRight]}>{semesterToString(comment.semester)}</Text>
    </View>
    <Text style={{ marginBottom: 5 }}>{comment.comment}</Text>
    <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
      <View style={styles.rowContainer}>
        <Text style={[CommonStyles.text, styles.marginRight]}>추천</Text>
        <Text style={[CommonStyles.boldText, styles.marginRight]}>{comment.like}</Text>
        <Text style={[CommonStyles.text, styles.marginRight]}>성적</Text>
        <Text style={[CommonStyles.boldText, styles.marginRight]}>{comment.grade}</Text>
        <Text style={[CommonStyles.text, styles.marginRight]}>널널</Text>
        <Text style={[CommonStyles.boldText, styles.marginRight]}>{comment.load}</Text>
        <Text style={[CommonStyles.text, styles.marginRight]}>강의</Text>
        <Text style={[CommonStyles.boldText, styles.marginRight]}>{comment.speech}</Text>
      </View>
      <View style={styles.rowContainer}>
        <MildTouchable style={{ marginRight: 10 }} onPress={onReportPress}>
          <Text style={[CommonStyles.text, { color: mainColor }]}>신고하기</Text>
        </MildTouchable>
        <MildTouchable onPress={onLikePress}>
          <Text style={CommonStyles.text}>좋아요</Text>
        </MildTouchable>
      </View>
    </View>
  </MildTouchable>
);

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
