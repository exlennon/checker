import styled from 'styled-components';

export const TasksKeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const TasksContainer = styled.SafeAreaView`
  flex: 1;
  background: #3c4556;
  padding: 10px;
`;

export const TasksTitleContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const TasksTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

export const TasksDesc = styled.Text`
  color: #fff;
  opacity: 0.4;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
