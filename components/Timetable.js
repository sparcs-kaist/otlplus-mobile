import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Timetable = () => (
  <View>
    <View>
      <Text>This is the Timetable</Text>
      {/* change the css(timetable height) and content info(show or not) when this.fullTimetable is false */}
      {/* 월 화 수 목 금 */}
      {/* 왼쪽 시간 bar */}
      {/* 월 div */}
      {/* 화 div */}
      {/* 수 div */}
      {/* 목 div */}
      {/* 금 div */}
    </View>
    <View>
      <View>
        {/* 기필, 전필, 인문,
            기선, 전선, 기타 */}
      </View>
      <View>
        {/* xx학점, xAU */}
      </View>
      <View>
        {/* 성적, 널널, 강의 */}
      </View>
    </View>
  </View>
);

export default Timetable;
