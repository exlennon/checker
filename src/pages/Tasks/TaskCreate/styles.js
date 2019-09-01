import {Animated} from 'react-native';
import styled from 'styled-components';

export const TaskCreateContainer = styled.Modal``;

export const TaskCreateContent = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const TaskCreateContentAreaAnimation = styled(Animated.View)`
  transform: translateY(300px);
  width: 100%;
`;

export const TaskCreateContentArea = styled.View`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
`;

export const TaskCreateBackgroundBottom = styled.ImageBackground`
  flex-direction: column;
  padding-bottom: 60px;
`;

export const TaskCreateBackgroundTop = styled.ImageBackground`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  padding-bottom: 60px;
`;

export const TaskCreateTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

export const TaskCreateDesc = styled.Text`
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  padding: 0 40px;
  text-align: left;
`;

export const TaskCreateDismissAnimation = styled(Animated.View)`
  transform: translateY(600px);
`;

export const TaskCreateDismiss = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 30px;
  width: 100%;
`;

export const TaskCreateDismissButton = styled.TouchableOpacity`
  padding: 20px;
`;

export const TaskCreateDismissButtonAnimation = styled(Animated.View)``;

export const TaskCreateForm = styled.View``;

export const TaskCreateFormContent = styled.View`
  background: #fff;
  padding: 20px;
`;

export const TaskCreateFormDesc = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const TaskCreateFormInputContainer = styled.View`
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 15px;
  height: 50px;
  margin-bottom: 5px;
`;

export const TaskCreateFormInput = styled.TextInput`
  color: #3c4556;
  font-size: 18px;
  font-weight: 700;
  flex: 1;
`;

export const TaskCreateFormSubmit = styled.TouchableHighlight`
  align-items: center;
  flex-direction: row;
  background: #2c1656;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
`;

export const TaskCreateFormSubmitText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-left: 10px;
`;
