import React from 'react';

import '~/config/ReactotronConfig';

import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import { store, persistor}  from './store';
import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor="#2c1656" barStyle="light-content" />
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
