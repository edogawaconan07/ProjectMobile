import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Register from '../screens/Register';
import SignIn from '../screens/SignIn';
import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Register: Register,
    SignIn:SignIn,
    HomeScreen:HomeScreen,
  },
  {
    initialRouteName: 'SignIn',
  }
  )
);
