import react from 'react';
import { 
  createAppContainer, 
  createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Register from '../screens/Register';
import SignIn from '../screens/SignIn';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import PostScreen from '../screens/PostScreen';
import CarDetail from '../screens/CarDetail';
import UpdateAccountScreen from '../screens/UpdateAccountScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Register: Register,
    SignIn:SignIn,
    AccountScreen:AccountScreen,
    PostScreen:PostScreen,
    CarDetail:CarDetail,
    UpdateAccountScreen:UpdateAccountScreen,
  },
  {
    initialRouteName: 'SignIn',
  }
  )
);
