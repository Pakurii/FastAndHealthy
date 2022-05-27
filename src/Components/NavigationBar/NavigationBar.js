import React from 'react';
import LoginPage from '../../Pages/Login Page';
import Styles from './NavigationBarStyle';
import RegisterSlider from '../../Pages/Register Slider';
import DieticianRegisterPage from '../../Pages/DieticianRegisterPage';
import UserRegisterPage from '../../Pages/UserRegisterPage';
import UserMainPage from '../../Pages/UserMainPage';
import ChatRoom from "../../Pages/ChatRoom";
import ChatScreen from "../../Pages/ChatScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import {Text,View,useWindowDimensions,Image} from 'react-native';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
       
    

       <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginPage}
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
        options={{headerShown: true ,
          headerBackTitleVisible:false,
          headerTitle:ChatScreenHeader}}
        name="ChatScreen"
        component={ChatScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Navigations"
        component={Navigations}
        
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ChatRoomScreen"
        component={ChatRoom}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ChatScreens"
        component={ChatScreen}
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
        component={UserMainPage}
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
        component={ChatRoom}
        options={{
          headerShown:true,
          headerTitle:ChatRoomHeader,
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
        component={ChatScreen}
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




const ChatRoomHeader = (props) => {
    const {width} = useWindowDimensions();
    return(
      <View style={{flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      paddingRight:30,
      width,}}>

      <Text style = {{flex:1,textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:"black"}}>Chat</Text>
      
      </View>
    )
  }

  const ChatScreenHeader = (props) => {
    const {width} = useWindowDimensions();
    return(
      <View style={{flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginRight:100,
      width:width,}}>
        <Image
         source={require("../../../assets/images/portre.png")}
         style = {{width:40,height:40,borderRadius:30}}
        ></Image>

      <Text style = {{flex:1,textAlign:"center",
        fontWeight:"bold",
        marginRight:130,
        color:"black"}}>Kullanici Adi</Text>
      
      </View>
    )
  }

export default MainStack;
