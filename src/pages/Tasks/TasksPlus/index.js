import React, {useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  TasksPlusPosition,
  TasksPlusContainer,
  TasksPlusContainerAnimation,
  TasksPlusRotateAnimation,
} from './styles';

const TasksPlus = ({visible, onPress}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration: 500,
      delay: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <TasksPlusPosition
      style={{
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <TasksPlusContainerAnimation>
        <TasksPlusContainer
          onPress={() => {
            onPress();
          }}
          underlayColor="#2aadd7">
          <TasksPlusRotateAnimation
            style={{
              transform: [
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['225deg', '0deg'],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <FontAwesome5 name="plus" size={32} color="#fff" />
          </TasksPlusRotateAnimation>
        </TasksPlusContainer>
      </TasksPlusContainerAnimation>
    </TasksPlusPosition>
  );
};

TasksPlus.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TasksPlus.defaultProps = {
  onPress: () => {},
};

export default TasksPlus;
