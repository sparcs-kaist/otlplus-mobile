import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import CommonStyles, { mainColor } from '../styles/CommonStyles';
import CourseBlock from './CourseBlock';
import MildTouchable from './MildTouchable';

const styles = {
  relatedCourseTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  relatedCourseTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  mainColorText: [
    CommonStyles.text,
    { color: mainColor },
  ],
  mainColorTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};

const exampleCourse = {
  name: '알고리즘 개론',
  oldCode: 'CS300',
  classification: [
    '전산학부', '전공필수',
  ],
  professors: [
    '마틴 지글러', '신성용', '에릭 비고다', '정지원', '최성희', '헬무트알트',
  ],
  description: '알고리즘의 시간 및 공간 복잡도를 분석하고 효율적인 알고리즘을 설계하는 기본적인 기법을 습득하며 정렬, 탐색, 그래프 순방, 문자열 정합, 동적프로그래밍 및 함수와 배열계산을 통하여 이 기법을 익힌다. NP완전문제와 병렬 알고리즘의 기본 개념을 다룬다. (선수과목 : CS204, CS206)',
};

const RelatedCourseSection = () => (
  <View>
    <View style={styles.relatedCourseTitleWrapper}>
      <Text style={styles.relatedCourseTitle}>연관 과목 - 데이타구조</Text>
    </View>
    <CourseBlock course={exampleCourse} onPress={() => {}} />
    <CourseBlock course={exampleCourse} onPress={() => {}} />
    <CourseBlock course={exampleCourse} onPress={() => {}} />
    <MildTouchable style={styles.mainColorTextWrapper} onPress={() => {}}>
      <Text style={styles.mainColorText}>자세히 보기</Text>
    </MildTouchable>
  </View>
);

export default RelatedCourseSection;
