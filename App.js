import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  { Task } from './src/pages/Task';
import { NewTask } from './src/pages/NewTask';
import { Details } from './src/pages/Details';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
          name="Login"
          component={ Login }
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="Register"
          component={ Register }
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="Task"
          component={ Task }
          options={{
            headerLeft: false,
            headerTintColor: "#f92e6a"
          }}
          />
          <Stack.Screen 
          name="New Task"
          component={ NewTask }
          options={{
            headerTintColor: "#f92e6a"
          }}
          />
          <Stack.Screen 
          name="Details"
          component={ Details }
          options={{
            headerTintColor: "#f92e6a"
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
