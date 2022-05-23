import React from 'react';
import LoginPage from '../../Pages/Login Page';
import Styles from './NavigationBarStyle';
// import RegisterSlider from '../../Pages/Register Slider';
// import DieticianRegisterPage from '../../Pages/DieticianRegisterPage';
// import UserRegisterPage from '../../Pages/UserRegisterPage';
import UserMainPage from '../../Pages/UserMainPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DFGSFGD" component={UserMainPage} />
    </Stack.Navigator>
  );
};

function Navigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...Styles.navbarCustomize,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../../assets/images/icons/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={LoginPage}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/icons/search.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={LoginPage}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../../assets/images/icons/chat.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={LoginPage}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/icons/settings.png')}
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
