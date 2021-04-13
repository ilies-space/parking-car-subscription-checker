import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ScanLicense from '../screens/ScanLicense';
import ManageMembers from '../screens/ManageMembers';
import {NavigationContainer} from '@react-navigation/native';

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScanLicense" component={ScanLicense} />
        <Stack.Screen name="ManageMembers" component={ManageMembers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
