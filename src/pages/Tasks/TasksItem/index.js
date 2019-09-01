import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  TasksItemMoveArea,
  TasksItemContainer,
  TasksItemContent,
  TasksItemTitle,
  TasksItemDescription,
  TasksItemOption,
} from './styles';

const TasksItem = ({
  data,
  active = false,
  onPressChecker,
  onPressMenu,
}) => (
  <TasksItemMoveArea>
    <TasksItemContainer active={active} finished={data.finished}>
      <TasksItemOption activeOpacity={0.5} onPress={onPressChecker}>
        <MaterialIcons
          name={data.finished ? 'check-circle' : 'radio-button-unchecked'}
          size={36}
          color="#f5f5f5"
        />
      </TasksItemOption>
      <TasksItemContent>
        <TasksItemTitle finished={data.finished}>{data.title}</TasksItemTitle>
        <TasksItemDescription finished={data.finished}>
          {data.description}
        </TasksItemDescription>
      </TasksItemContent>
      <TasksItemOption activeOpacity={0.58} onPress={onPressMenu}>
        <SimpleLineIcons name={'options-vertical'} size={18} color="#f5f5f5" />
      </TasksItemOption>
    </TasksItemContainer>
  </TasksItemMoveArea>
);

TasksItem.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    idTask: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    finished: PropTypes.bool
  }),
  onPressChecker: PropTypes.func.isRequired,
  onPressNavigator: PropTypes.func.isRequired,
  onPressMenu: PropTypes.func.isRequired,
};

TasksItem.defaultProps = {
  active: false,
  onPressChecker: () => {},
  onPressMenu: () => {},
};

export default TasksItem;
