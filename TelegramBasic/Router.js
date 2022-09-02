import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/LoginPage';
import ContactPage from './src/pages/ContactPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


    <Tab.Navigator>
      <Tab.Screen name="LoginPage" component={LoginPage} />
      <Tab.Screen name="ContactPage" component={ContactPage} />
    </Tab.Navigator>


const Router = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="ContactPage" component={ContactPage}/>
      </Stack.Navigator>
  );
};


export default Router;
