import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Tasks from '~/pages/Tasks';
import Task from '~/pages/Task';

const Routes = createAppContainer(createStackNavigator({Tasks, Task}));

export default Routes;
