import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '../../Pages/Login Page';
import Styles from './NavigationBarStyle';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...Styles.navbarCustomize,
        },
      }}>
      <Tab.Screen name="Home" component={LoginPage} />
      <Tab.Screen name="Search" component={LoginPage} />
      <Tab.Screen name="BarList" component={LoginPage} />
      <Tab.Screen name="Chat" component={LoginPage} />
      <Tab.Screen name="Settings" component={LoginPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
