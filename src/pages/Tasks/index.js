import React from 'react';
import SortableList from 'react-native-sortable-list';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  TasksContainer,
  TasksTitleContent,
  TasksTitle,
  TasksDesc,
} from './styles';

import TasksItem from './TasksItem';
import TasksPlus from './TasksPlus';
import TasksEmpty from './TasksEmpty';

const Tasks = ({navigation}) => {
  const data = {
    0: {
      idtask: 1,
      title: 'Task 1',
      description: 'Desc 1',
      finished: 0,
    },
    1: {
      idtask: 1,
      title: 'Task 2',
      description: 'Desc 2',
      finished: 1,
    },
    2: {
      idtask: 1,
      title: 'Task 3',
      description: 'Desc 3',
      finished: 0,
    },
  };

  return (
    <TasksContainer>
      {/* <TasksEmpty /> */}

      <SortableList
        data={data}
        style={{flex: 1}}
        contentContainerStyle={{flex: 1}}
        innerContainerStyle={{flex: 1}}
        renderHeader={() => (
          <TasksTitleContent>
            <AntDesign name="flag" size={36} color="#fff" />
            <TasksTitle>5 Tarefas Pendentes!</TasksTitle>
            <TasksDesc>Força e Resiliência</TasksDesc>
          </TasksTitleContent>
        )}
        renderRow={({data, active}) => (
          <TasksItem
            onPressChecker={() => {}}
            onPressNavigator={() => {
              navigation.navigate('Task', {
                idtask: data.idtask,
              });
            }}
            onPressMenu={() => {}}
            data={data}
            active={active}
          />
        )}
      />
      <TasksPlus />
    </TasksContainer>
  );
};

Tasks.navigationOptions = {
  header: null,
};

export default Tasks;
