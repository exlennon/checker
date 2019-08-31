import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  TasksItemContainer,
  TasksItemContent,
  TasksItemTitle,
  TasksItemDescription,
  TasksItemOption,
} from './styles';

const TasksItem = ({
  data,
  active = false,
  onPressNavigator,
  onPressChecker,
  onPressMenu,
}) => (
  <TasksItemContainer active={active} finished={data.finished}>
    <TasksItemOption activeOpacity={0.5} onPress={onPressChecker}>
      <MaterialIcons
        name={data.finished ? 'check-circle' : 'radio-button-unchecked'}
        size={36}
        color="#f5f5f5"
      />
    </TasksItemOption>
    <TasksItemContent activeOpacity={0.5} onPress={onPressNavigator}>
      <TasksItemTitle finished={data.finished}>{data.title}</TasksItemTitle>
      <TasksItemDescription finished={data.finished}>
        {data.description}
      </TasksItemDescription>
    </TasksItemContent>
    <TasksItemOption activeOpacity={0.58} onPress={onPressMenu}>
      <SimpleLineIcons name={'options-vertical'} size={18} color="#f5f5f5" />
    </TasksItemOption>
  </TasksItemContainer>
);

TasksItem.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onPressChecker: PropTypes.func.isRequired,
  onPressNavigator: PropTypes.func.isRequired,
  onPressMenu: PropTypes.func.isRequired,
};

TasksItem.defaultProps = {
  active: false,
  onPressChecker: () => {},
  onPressNavigator: () => {},
  onPressMenu: () => {},
};

export default TasksItem;
