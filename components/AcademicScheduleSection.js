import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import MildTouchable from './MildTouchable';
import CommonStyles, { mainColor } from '../styles/CommonStyles';

const styles = {
  dueWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  timer: {
    fontSize: 20,
  },
  date: {
    flexDirection: 'row',
    margin: 2,

    fontSize: 12,
  },
  mainColorText: [
    CommonStyles.text,
    { color: mainColor },
  ],
  bold: {
    fontWeight: 'bold',
  },
  mainColorTextWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};

const AcademicScheduleSection = () => (
  <View>
    <View style={styles.dueWrapper}>
      <Text style={styles.timer}>D-4일 13시간 22분 07초</Text>
      <View style={styles.date}>
        <Text style={styles.bold}>봄학기 수강신청  </Text>
        <Text>2018.1.3</Text>
      </View>
    </View>
    <MildTouchable style={styles.mainColorTextWrapper} onPress={() => {}}>
      <Text style={styles.mainColorText}>학사시스템 바로가기</Text>
    </MildTouchable>
  </View>
);

export default AcademicScheduleSection;
