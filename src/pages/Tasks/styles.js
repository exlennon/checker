import styled from 'styled-components';

export const TasksKeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const TasksContainer = styled.SafeAreaView`
  flex: 1;
  background: #2c1656;
  padding: 0px;
`;

export const TasksTitleContent = styled.View`
  flex-direction: row;
  padding: 30px 20px;
  align-items: center;
`;

export const TasksTitleInformationContent = styled.View`
  flex-direction: column;
  padding-left: 20px;
`;

export const TasksTitleCount = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

export const TasksTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const TasksDesc = styled.Text`
  color: #fff;
  opacity: 0.4;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
`;

export const TasksEmptyContainer = styled.View`
  padding: 40px;
  align-items: center;
  justify-content: center;
`;

export const TasksEmptyTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const TasksEmptyDesc = styled.Text`
  color: #fff;
  opacity: 0.4;
  font-size: 14px;
  text-align: center;
`;
