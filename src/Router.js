import Tabs from './Components/NavigationBar/NavigationBar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigations from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}
export default App;
