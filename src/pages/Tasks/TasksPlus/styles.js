import {Animated} from 'react-native';
import styled from 'styled-components';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const TasksPlusPosition = styled(Animated.View)`
  position: absolute;
  z-index: 10;
  top: ${props => (props.formFocused ? 0 : height - 120)};
  left: 0px;
  background: ${props => (props.formFocused ? '#fff' : 'rgba(0,0,0,0)')};
  width: ${width};
  height: ${props => (props.formFocused ? height : 'auto')};
`;

export const TasksPlusContainerAnimation = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
  z-index: 10;
`;

export const TasksPlusContainer = styled.TouchableHighlight`
  background: #3c4556;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-color: #f5f5f5;
  border-width: 2px;
  border-style: solid;
`;

export const TasksPlusRotateAnimation = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TasksPlusFormAnimation = styled(Animated.View)`
  width: ${width};
  padding: 0 20px;
`;

export const TasksPlusForm = styled.View`
  flex: 1;
`;

export const TasksPlusFormContent = styled.View`
  background: #fff;
  flex: 1;
  padding: 20px;
  min-height: 400px;
  border-top-left-radius: 12px;
  border-top-right-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const TasksPlusFormTitle = styled.Text`
  font-size: 22px;
  color: #666;
  font-weight: 700;
`;

export const TasksPlusFormDesc = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const TasksPlusFormInputContainer = styled.View`
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 15px;
  height: 50px;
  margin-bottom: 5px;
`;

export const TasksPlusFormInput = styled.TextInput`
  color: #3c4556;
  font-size: 18px;
  font-weight: 700;
  flex: 1;
`;

export const TasksPlusFormSubmit = styled.TouchableHighlight`
  align-items: center;
  flex-direction: row;
  background: #3c4556;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
`;

export const TasksPlusFormSubmitText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-left: 10px;
`;
