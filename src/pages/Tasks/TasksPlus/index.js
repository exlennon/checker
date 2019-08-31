import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {TasksPlusContainer} from './styles';

const TasksPlus = ({onPress}) => (
  <TasksPlusContainer onPress={onPress} underlayColor="#444">
    <FontAwesome5 name="plus" size={32} color="#fff" />
  </TasksPlusContainer>
);

TasksPlus.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TasksPlus.defaultProps = {
  onPress: () => {},
};

export default TasksPlus;
