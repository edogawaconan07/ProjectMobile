import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator, 
  createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CarDetail from '../screens/CarDetail';
import UpdateAccountScreen from '../screens/UpdateAccountScreen';
import PostImageCar from '../screens/PostImageCar';
import AccountCarScreen from '../screens/AccountCarSreen';
import CarDetailAccount from '../screens/CarDetailAccount';
import UpdateTaiKhoan from '../screens/UpdateTaiKhoan';
import CarDetailLike from '../screens/CarDetailLike';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CarDetail: CarDetail,
  },
  config
);

HomeStack.navigationOptions = {
  title:'Trang chủ',
  tabBarLabel: 'Trang chủ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
      />
  ),
};

HomeStack.path = '';

const PostStack = createStackNavigator(
  {
    Post:PostImageCar,
    PostScreen: PostScreen,
  },
  config
);

PostStack.navigationOptions = {
  tabBarLabel: 'Đăng bài',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-paper'}
      />
  ),
};

PostStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
    UpdateAccountScreen: UpdateAccountScreen,
    AccountCarScreen:AccountCarScreen,
    CarDetailAccount: CarDetailAccount,
    UpdateTaiKhoan:UpdateTaiKhoan,
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Tài khoản',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
    focused={focused} 
    name={'md-person'} 
    />
  ),
};

AccountStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     SettingsScreen: SettingsScreen,
//     CarDetailLike:CarDetailLike,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Yêu thích',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon 
//     focused={focused} 
//     name={'md-person'} 
//     />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PostStack,
  AccountStack,
  //SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
