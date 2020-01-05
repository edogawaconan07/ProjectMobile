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
import Loading from '../screens/Loading';
import PostImageCar from '../screens/PostImageCar';
import AccountCarScreen from '../screens/AccountCarSreen';
import CarDetailAccount from '../screens/CarDetailAccount';
import UpdateTaiKhoan from '../screens/UpdateTaiKhoan';
import CarDetailLike from '../screens/CarDetailLike';
import SettingsScreen from '../screens/SettingsScreen';


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
    Loading:Loading,
    PostImageCar:PostImageCar,
    AccountCarScreen:AccountCarScreen,
    CarDetailAccount:CarDetailAccount,
    UpdateTaiKhoan:UpdateTaiKhoan,   
    CarDetailLike:CarDetailLike, 
    SettingsScreen:SettingsScreen,
  },
  {
    initialRouteName: 'Loading',
  }
  )
);
