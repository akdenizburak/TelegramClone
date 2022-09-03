import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ContactPage from './src/pages/ContactPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageListPage from './src/pages/MessageListPage';
import SettingsPage from './src/pages/SettingsPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThemePage from './src/pages/ThemePage';
import EditProfilePage from './src/pages/EditProfilePage';
import LoginPage from './src/pages/LoginPage';
import ChatPage from './src/pages/ChatPage';
import { ThemeContext } from './src/context/Theme';
import ThemeProvider from './src/provider/ThemeProvider';


const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();


const ChatStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='MessageList'component={MessageListPage}/>
      <Stack.Screen name="Chat" component={ChatPage}/>
    </Stack.Navigator>
    
  )
}

const SettingsStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='SettingsPage' component={SettingsPage}/>
      <Stack.Screen name='Theme' component={ThemePage}/>
      <Stack.Screen name='EditProfile' component={EditProfilePage}/>
      <Stack.Screen name='Login' component={LoginPage}/>
    </Stack.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-person-circle-sharp"
                size={27}
                color={tabInfo.focused ? "#007EFB" : "#8e8e93"}
              />
            );
          },
        }} name='Contact' component={ContactPage} />
        <Tab.Screen options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-chatbubbles-sharp"
                size={27}
                color={tabInfo.focused ? "#007EFB" : "#8e8e93"}
              />
            );
          },
        }} name='Chats' component={ChatStack} />
        <Tab.Screen options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="settings"
                size={27}
                color={tabInfo.focused ? "#007EFB" : "#8e8e93"}
              />
            );
          },
        }} name='Settings' component={SettingsStack} />
      </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default Router;
