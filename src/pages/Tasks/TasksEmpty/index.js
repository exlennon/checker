import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {TasksEmptyContainer, TasksEmptyTitle, TasksEmptyDesc} from './styles';

const TasksEmpty = () => (
  <TasksEmptyContainer>
    <Ionicons name="md-construct" size={60} color="#fff" />
    <TasksEmptyTitle>Você não possui nenhuma tarefa!</TasksEmptyTitle>
    <TasksEmptyDesc>
      Começe agora mesmo a criar sua lista de tarefas e controle de forma
      simples suas atividades.{' '}
    </TasksEmptyDesc>
  </TasksEmptyContainer>
);

TasksEmpty.propTypes = {};
TasksEmpty.defaultProps = {};

export default TasksEmpty;
