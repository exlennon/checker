import styled from 'styled-components';

export const TaskContainer = styled.View`
  flex: 1;
  background: #3c4556;
`;

export const TaskTitleContainer = styled.View`
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
`;

export const TaskTitle = styled.Text`
  color: #fff;
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const TaskBackContent = styled.TouchableOpacity`
  flex-direction: row;
  z-index: 10px;
  margin-top: -50px;
  margin-bottom: 30px;
`;

export const TaskBack = styled.TouchableHighlight`
  padding: 10px 20px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #fff;
  background: #3c4556;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: center;
`;

export const TaskBackTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding-left: 10px;
`;

export const TaskContent = styled.View`
  padding: 30px;
`;

export const TaskTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TaskTimeDescribe = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #666;
  margin-left: 10px;
`;

export const TaskDescription = styled.Text`
  color: #999;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
  padding: 30px 0;
`;

export const TaskFinish = styled.View`
  align-items: center;
  flex-direction: row;
  background: #3c4556;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
`;

export const TaskFinishTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-left: 10px;
`;
