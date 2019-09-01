import React, {useState} from 'react';
import {Platform, Alert} from 'react-native';
import SortableList from 'react-native-sortable-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const Tasks = ({navigation}) => {
  const [taskShowing, setTaskShowing] = useState(null);
  const [taskCreate, setTaskCreate] = useState(false);

  const data = {
    0: {
      idTaskidtask: 1,
      title: 'Task 1',
      description: 'Desc 1',
      finished: 0,
    },
    1: {
      idTask: 1,
      title: 'Task 2',
      description: 'Desc 2',
      finished: 1,
    },
    2: {
      idTask: 1,
      title: 'Task 3',
      description: 'Desc 3',
      finished: 0,
    },

    3: {
      idTask: 1,
      title: 'Task 3',
      description: 'Desc 3',
      finished: 0,
    },

    4: {
      idTask: 1,
      title: 'Task 4',
      description: 'Desc 4',
      finished: 0,
    },
    5: {
      idTask: 1,
      title: 'Task 5',
      description: 'Desc 5',
      finished: 0,
    },
  };

  const finishedTasksCount = 6;
  const unfinishedTasksCount = 6;

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
              Alert.alert('delete');
            }}
            onRequestToggle={() => {
              Alert.alert('toggle');
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
            onRequestCreate={(title, description) => {
              Alert.alert(title);
              Alert.alert(description);
            }}
          />
        )}

        <SortableList
          data={data}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          renderHeader={() => (
            <TasksTitleContent>
              <FontAwesome5 name="clipboard-check" size={40} color="#ecbe69" />
              <TasksTitleInformationContent>
                <TasksTitleCount>
                  {finishedTasksCount ? finishedTasksCount : 'Nenhuma '}
                  {finishedTasksCount > 1
                    ? 'Tarefas Pendentes'
                    : 'Tarefa Pendente'}
                </TasksTitleCount>
                <TasksDesc>
                  {unfinishedTasksCount ? unfinishedTasksCount : 'Nenhuma '}
                  {unfinishedTasksCount > 1
                    ? 'Tarefas Concluídas'
                    : 'Tarefa Concluída'}
                </TasksDesc>
              </TasksTitleInformationContent>
            </TasksTitleContent>
          )}
          renderRow={({data, active}) => (
            <TasksItem
              onPressChecker={() => {}}
              onPressMenu={() => {
                setTaskShowing(data);
              }}
              data={data}
              active={active}
            />
          )}
          renderFooter={() => {
            return (
              <TasksEmptyContainer>
                <Ionicons name="md-construct" size={60} color="#792e4b" />
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

export default Tasks;
