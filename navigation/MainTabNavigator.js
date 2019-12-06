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

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
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
    Post: PostScreen,
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

/*const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';*/

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PostStack,
  AccountStack,
  //SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
