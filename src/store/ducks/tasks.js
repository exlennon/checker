import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  createTask: ['task'],
  toggleTask: ['task'],
  deleteTask: ['task'],
  orderTasks: ['data']
});

const INITIAL_STATE = {
  data: [],
};

const createTask = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [...state.data, action.task],
});

const toggleTask = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [
    ...state.data.map(task => {
      if (action.task.idTask == task.idTask) {
        task.finished = !task.finished;
      }
      return task;
    }),
  ],
});

const deleteTask = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [...state.data.filter(task => action.task.idTask != task.idTask)],
});

const orderTasks = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_TASK]: createTask,
  [Types.TOGGLE_TASK]: toggleTask,
  [Types.DELETE_TASK]: deleteTask,
  [Types.ORDER_TASKS]: orderTasks,
});
