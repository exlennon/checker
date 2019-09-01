import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Tasks from '~/pages/Tasks';

const Routes = createAppContainer(createSwitchNavigator({Tasks}));

export default Routes;
