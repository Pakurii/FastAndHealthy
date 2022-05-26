import React from 'react';
import LoginPage from '../../Pages/Login Page';
import Styles from './NavigationBarStyle';
import RegisterSlider from '../../Pages/Register Slider';
import DieticianRegisterPage from '../../Pages/DieticianRegisterPage';
import UserRegisterPage from '../../Pages/UserRegisterPage';
import UserMainPage from '../../Pages/UserMainPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="UserMainScreen"
        component={UserMainPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterSliderScreen"
        component={RegisterSlider}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DieticianRegisterScreen"
        component={DieticianRegisterPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="UserRegisterScreen"
        component={UserRegisterPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginPage}
      />
    </Stack.Navigator>
  );
};

function Navigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        
        tabBarStyle: {
          ...Styles.navbarCustomize,
        },
        headerShown: false,

        tabBarActiveTintColor: '#116ED8',
        tabBarInactiveTintColor: '#c4c4c4',
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={LoginPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="text-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={LoginPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chat-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={LoginPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Stack.Screen name="RegisterScreen" component={RegisterSlider} />
      <Stack.Screen
        name="DieticianRegisterScreen"
        component={DieticianRegisterPage}
      />
      <Stack.Screen name="UserRegisterScreen" component={UserRegisterPage} />
      <Stack.Screen name="LoginScreen" component={LoginPage} /> */}
    </Tab.Navigator>
  );
}

export default Navigations;
