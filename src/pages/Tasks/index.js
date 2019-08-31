import React from 'react';
import {TasksContainer} from './styles';
import SortableList from 'react-native-sortable-list';
import ListItem from './ListItem';

const Tasks = () => {
  const data = {
    0: {
      title: 'Task 1',
      description: 'Desc 1',
    },
    1: {
      title: 'Task 2',
      description: 'Desc 2',
    },
    2: {
      title: 'Task 3',
      description: 'Desc 3',
    },
  };

  return (
    <TasksContainer>
      <SortableList
        data={data}
        renderRow={({data, active}) => <ListItem data={data} active={active} />}
      />
    </TasksContainer>
  );
};

Tasks.navigationOptions = {
  header: null,
};

export default Tasks;
