import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";
import LoginPage from "./src/Pages/Login Page/LoginPage";
import RegisterSlider from "./src/Pages/Register Slider/RegisterSlider";

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
      return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />  
          <Stack.Screen options={{ headerShown: false }} name="RegisterSlider" component={RegisterSlider} />  
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  export default App