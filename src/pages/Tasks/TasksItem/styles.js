import styled from 'styled-components';

export const TasksItemMoveArea = styled.View`
  padding: 0 20px;
`;

export const TasksItemContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  opacity: ${props => (props.finished ? 0.4 : 1)};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 5px;
  border-color: #fff;
  border-width: ${props => (props.active ? '2px' : '0px')};
  border-style: dashed;
`;

export const TasksItemContent = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
`;

export const TasksItemTitle = styled.Text`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: ${props => (props.finished ? 'line-through' : 'none')};
`;

export const TasksItemDescription = styled.Text`
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.4;
  text-decoration-line: ${props => (props.finished ? 'line-through' : 'none')};
`;

export const TasksItemOption = styled.TouchableOpacity`
  height: 36px;
  align-self: center;
  justify-content: center;
`;
