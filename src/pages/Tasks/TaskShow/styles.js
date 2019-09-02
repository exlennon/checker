import {Animated} from 'react-native';
import styled from 'styled-components';

export const TaskShowContainer = styled.Modal``;

export const TaskShowContent = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const TaskShowDismissAnimation = styled(Animated.View)`
  transform: translateY(600px);
  z-index: 110;
`;

export const TaskShowDismiss = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const TaskShowDismissButton = styled.TouchableOpacity`
  padding: 20px;
  z-index: 120;
`;

export const TaskShowDismissButtonAnimation = styled(Animated.View)``;

export const TaskShowContentAreaAnimation = styled(Animated.View)`
  transform: translateY(300px);
  width: 100%;
`;

export const TaskShowContentArea = styled.View`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
`;

export const TaskShowBackgroundBottom = styled.ImageBackground`
  flex-direction: column;
  padding-bottom: 60px;
`;

export const TaskShowBackgroundTop = styled.ImageBackground`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  padding-bottom: 60px;
`;

export const TaskShowTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  text-decoration-line: ${props => (props.finished ? 'line-through' : 'none')};
  opacity: ${props => (props.finished ? 0.4 : 1)};
`;

export const TaskShowDesc = styled.Text`
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  padding: 0 40px;
  text-align: left;
  text-decoration-line: ${props => (props.finished ? 'line-through' : 'none')};
  opacity: ${props => (props.finished ? 0.4 : 1)};
`;

export const TaskShowCheckerAnimation = styled(Animated.View)`
  transform: translateY(160px);
`;

export const TaskShowChecker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TaskShowCheckerButton = styled.TouchableHighlight`
  background: ${props => (props.finished ? '#70c45f' : '#ecbe69')};
  width: 60px;
  height: 60px;
  margin: 0 5px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  
`;
