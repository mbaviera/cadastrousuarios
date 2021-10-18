import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Register from '../pages/Register';
import Edit from '../pages/Edit';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

export default function AppNavigation() {
  useEffect(() => {
    SplashScreen.hide();
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false, animationTypeForReplace: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
