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
  timetableInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timetable: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
          {/* change the css(timetable height) and content info(show or not) when this.fullTimetable is false */}
          <Text>  월 화 수 목 금 </Text>
          <Text>{expandedTimetable && <Text>fullTimetable</Text>}</Text>
          {/* 월 화 수 목 금 */}
          {/* 왼쪽 시간 bar */}
          {/* 월 div */}
          {/* 화 div */}
          {/* 수 div */}
          {/* 목 div */}
          {/* 금 div */}
        </Box>
      </View>
      <View style={styles.timetableInfo}>
        <View>
          <Text>기필, 전필, 인문,</Text>
          <Text>기선, 전선, 기타 </Text>
          {/* 기필, 전필, 인문,
              기선, 전선, 기타 */}
        </View>
        <View>
          <Text>12학점, 2AU</Text>
          {/* xx학점, xAU */}
        </View>
        <View>
          <Text>A+ B0, A-</Text>
          {/* 성적, 널널, 강의 */}
        </View>
      </View>
      <View>
        <Button
          onPress={onArrowClick}
          title={expandedTimetable ? 'Up' : 'Down'}
        />
        {/* svg 로 바꿀 예정 */}
      </View>
    </View>
  );
};

export default Timetable;
