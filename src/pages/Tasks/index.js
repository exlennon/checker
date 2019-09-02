import React, {useState, useEffect} from 'react';
import {Platform } from 'react-native';
import SortableList from 'react-native-sortable-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as TasksActions} from '~/store/ducks/tasks';

import {
  TasksKeyboardAvoid,
  TasksContainer,
  TasksTitleContent,
  TasksTitleInformationContent,
  TasksTitleCount,
  TasksDesc,
  TasksEmptyContainer,
  TasksEmptyTitle,
  TasksEmptyDesc,
} from './styles';

import TasksItem from './TasksItem';
import TasksPlus from './TasksPlus';
import TaskShow from './TaskShow';
import TaskCreate from './TaskCreate';

const Tasks = ({data, tasksActions}) => {
  const [taskShowing, setTaskShowing] = useState(null);
  const [taskCreate, setTaskCreate] = useState(false);
  const [finishedTasksCount, setFinishedTasksCount] = useState(0);
  const [unfinishedTasksCount, setUnfinishedTasksCount] = useState(0);

  useEffect(() => {
    setFinishedTasksCount(
      data.reduce((acc, item) => {
        if (!item.finished) {
          acc++;
        }
        return acc;
      }, 0),
    );
    setUnfinishedTasksCount(
      data.reduce((acc, item) => {
        if (item.finished) {
          acc++;
        }
        return acc;
      }, 0),
    );
  }, [data]);

  const onRequestCreate = (title, description) => {
    const {createTask} = tasksActions;
    const idTask = Math.floor(Math.random() * 1000) + 1;

    createTask({
      idTask,
      title,
      description,
    });
  };

  const onPressChecker = task => {
    const {toggleTask} = tasksActions;
    toggleTask(task);
  };

  const onRequestDelete = task => {
    const {deleteTask} = tasksActions;
    deleteTask(task);
  };

  const onChangeOrder = (key, nextOrder) => {
    const {orderTasks} = tasksActions;
    let dataPreserveOrder = [];
    for (index of nextOrder) {
      dataPreserveOrder.push(data[index]);
    }
    orderTasks(dataPreserveOrder);
  };

  return (
    <TasksKeyboardAvoid
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <TasksContainer>
        {taskShowing && (
          <TaskShow
            onRequestClose={() => setTaskShowing(null)}
            onRequestDelete={() => {
              onRequestDelete(taskShowing);
            }}
            onPressChecker={() => {
              onPressChecker(taskShowing);
            }}
            data={taskShowing}
          />
        )}

        <TasksPlus
          visible={!taskCreate}
          onPress={() => {
            setTaskCreate(true);
          }}
        />

        {taskCreate && (
          <TaskCreate
            onRequestClose={() => setTaskCreate(false)}
            onRequestCreate={onRequestCreate}
          />
        )}

        <SortableList
          data={data}
          onReleaseRow={onChangeOrder}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          renderHeader={() => {
            if (!data.length) return null;
            return (
              <TasksTitleContent>
                <FontAwesome5
                  name="clipboard-check"
                  size={40}
                  color="#ecbe69"
                />
                <TasksTitleInformationContent>
                  <TasksTitleCount>
                    {finishedTasksCount ? finishedTasksCount : 'Nenhuma'}
                    {finishedTasksCount > 1 ? ' Tarefas' : ' Tarefa'}
                  </TasksTitleCount>
                  <TasksDesc>
                    {unfinishedTasksCount ? unfinishedTasksCount : 'Nenhuma'}
                    {unfinishedTasksCount > 1
                      ? ' Tarefas Concluídas'
                      : ' Tarefa Concluída'}
                  </TasksDesc>
                </TasksTitleInformationContent>
              </TasksTitleContent>
            );
          }}
          renderRow={({data, active}) => (
            <TasksItem
              onPressChecker={() => {
                onPressChecker(data);
              }}
              onPressMenu={() => {
                setTaskShowing(data);
              }}
              data={data}
              active={active}
            />
          )}
          renderFooter={() => {
            if (data.length) return null;

            return (
              <TasksEmptyContainer>
                <Ionicons name="md-construct" size={60} color="#ecbe69" />
                <TasksEmptyTitle>Nenhuma tarefa!</TasksEmptyTitle>
                <TasksEmptyDesc>
                  Começe agora mesmo a criar sua lista de tarefas e controle de
                  forma simples suas atividades.{' '}
                </TasksEmptyDesc>
              </TasksEmptyContainer>
            );
          }}
        />
      </TasksContainer>
    </TasksKeyboardAvoid>
  );
};

Tasks.navigationOptions = {
  header: null,
};

export default connect(
  state => ({
    data: state.tasks.data,
  }),
  dispatch => ({
    tasksActions: bindActionCreators(TasksActions, dispatch),
  }),
)(Tasks);
