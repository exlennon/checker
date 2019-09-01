import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  TaskShowContainer,
  TaskShowContentArea,
  TaskShowBackgroundTop,
  TaskShowBackgroundBottom,
  TaskShowContentAreaAnimation,
  TaskShowContent,
  TaskShowTitle,
  TaskShowDesc,
  TaskShowCheckerAnimation,
  TaskShowChecker,
  TaskShowCheckerButton,
  TaskShowDismissAnimation,
  TaskShowDismiss,
  TaskShowDismissButtonAnimation,
  TaskShowDismissButton,
} from './styles';

import modalBottom from '~/assets/modal-bottom.png';
import modalTop from '~/assets/modal-top.png';

const TaskShow = ({data, onRequestClose, onRequestDelete, onRequestToggle}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      delay: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  function preOnRequestClose() {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      onRequestClose();
    });
  }

  return (
    <TaskShowContainer animationType="none" transparent={true}>
      <TaskShowContent>
        <TaskShowDismissAnimation
          style={{
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <TaskShowDismiss>
            <TaskShowDismissButtonAnimation
              style={{
                opacity: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <TaskShowDismissButton
                activityOpacity={0.1}
                onPress={preOnRequestClose}>
                <AntDesign name={'close'} size={36} color="#fff" />
              </TaskShowDismissButton>
            </TaskShowDismissButtonAnimation>
          </TaskShowDismiss>
        </TaskShowDismissAnimation>

        <TaskShowContentAreaAnimation
          style={{
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <TaskShowContentArea>
            <TaskShowBackgroundBottom resizeMode="stretch" source={modalBottom}>
              <TaskShowBackgroundTop resizeMode="stretch" source={modalTop}>
                <TaskShowTitle finished={data.finished}>
                  {data.title}
                </TaskShowTitle>
              </TaskShowBackgroundTop>
              <TaskShowDesc finished={data.finished}>
                {data.description}
              </TaskShowDesc>
            </TaskShowBackgroundBottom>
          </TaskShowContentArea>
        </TaskShowContentAreaAnimation>

        <TaskShowCheckerAnimation
          style={{
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, -30],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <TaskShowChecker>
            <TaskShowCheckerButton
              underlayColor="#2aadd7"
              finished={data.finished}
              onPress={onRequestToggle}>
              <FontAwesome5 name={'check'} size={22} color="#fff" />
            </TaskShowCheckerButton>
            <TaskShowCheckerButton
              underlayColor="#2aadd7"
              onPress={onRequestDelete}>
              <FontAwesome5 name={'trash'} size={22} color="#fff" />
            </TaskShowCheckerButton>
          </TaskShowChecker>
        </TaskShowCheckerAnimation>
      </TaskShowContent>
    </TaskShowContainer>
  );
};

TaskShow.propTypes = {
  data: PropTypes.shape({
    idTask: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    finished: PropTypes.bool,
  }),
  onRequestClose: PropTypes.func.isRequired,
  onRequestDelete: PropTypes.func.isRequired,
  onRequestToggle: PropTypes.func.isRequired,
};

TaskShow.defaultProps = {
  data: null,
  onRequestClose: () => {},
  onRequestDelete: () => {},
  onRequestToggle: () => {},
};

export default TaskShow;
