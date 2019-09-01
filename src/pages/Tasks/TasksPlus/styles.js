import {Animated} from 'react-native';
import styled from 'styled-components';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const TasksPlusPosition = styled(Animated.View)`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 20px;
  transform: translateY(150px);
`;

export const TasksPlusContainerAnimation = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  z-index: 10;
`;

export const TasksPlusContainer = styled.TouchableHighlight`
  background: #ecbe69;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-color: #301a3e;
  border-width: 2px;
  border-style: solid;
`;

export const TasksPlusRotateAnimation = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  transform: rotate(225deg);
`;

export const TasksPlusFormAnimation = styled(Animated.View)`
  width: ${width};
  padding: 0 20px;
`;
