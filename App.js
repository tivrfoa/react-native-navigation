import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ExitScreen from './ExitScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Exit: {screen: ExitScreen}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;