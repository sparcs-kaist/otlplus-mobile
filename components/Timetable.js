import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import posed from 'react-native-pose';
// import ShevronUp from '../assets/icons/shevron-up-solid.svg';
// import { ShevronDown } from '../assets/icons/shevron-down-solid.svg';
import CommonStyles from '../styles/CommonStyles';

const styles = {
  timetable: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timetableInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  classification: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  credit: {
    fontSize: 13,
  },
};

const Timetable = (props) => {
  const { fullTimetable } = props;
  const [expandedTimetable, setTimetableSize] = useState(fullTimetable);

  const Box = posed.View({
    expanded: {
      height: 400,
    },
    shrinked: {
      height: 200,
    },
  });

  function onArrowClick() {
    setTimetableSize(!expandedTimetable);
  }

  return (
    <View>
      <View>
        <Box
          pose={expandedTimetable ? 'expanded' : 'shrinked'}
          style={styles.timetable}
        >
          <View>
            {/* 왼쪽 시간 bar */}
            <Text>8</Text>
          </View>
          <View>
            <Text>월요일</Text>
          </View>
          <View>
            <Text>화요일</Text>
          </View>
          <View>
            <Text>수요일</Text>
          </View>
          <View>
            <Text>목요일</Text>
          </View>
          <View>
            <Text>금요일</Text>
          </View>
        </Box>
      </View>
      <View style={styles.timetableInfo}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.classification}>기필 </Text>
            <Text style={styles.credit}>10 </Text>
            <Text style={styles.classification}>전필 </Text>
            <Text style={styles.credit}>3 </Text>
            <Text style={styles.classification}>인문 </Text>
            <Text style={styles.credit}>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.classification}>기선 </Text>
            <Text style={styles.credit}>6 </Text>
            <Text style={styles.classification}>전선 </Text>
            <Text style={styles.credit}>0 </Text>
            <Text style={styles.classification}>기타 </Text>
            <Text style={styles.credit}>4 </Text>
          </View>
          {/* table 로 다시짜기 */}
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text>12</Text>
            <Text>학점</Text>
          </View>
          <View style={styles.column}>
            <Text>2</Text>
            <Text>AU</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text>A-</Text>
            <Text>성적</Text>
          </View>
          <View style={styles.column}>
            <Text>B+</Text>
            <Text>널널</Text>
          </View>
          <View style={styles.column}>
            <Text>B</Text>
            <Text>강의</Text>
          </View>
        </View>
      </View>
      <View>
        <Text onPress={onArrowClick}>
          {expandedTimetable ? 'Up' : 'Down'}
        </Text>
        {/* svg 로 바꿀 예정 */}
      </View>
    </View>
  );
};

export default Timetable;
