import React from 'react';
import {
  createAppContainer, createBottomTabNavigator, createSwitchNavigator
} from "react-navigation";

import FavouritesScreen from './components/screens/FavouritesScreen';
import MenuScreen from './components/screens/MenuScreen';
import UserSettingsScreen from './components/screens/UserSettingsScreen';
import StartSettingsScreen from './components/screens/StartSettingsScreen';

const MainTabs = createBottomTabNavigator(
  {
    Favourite: FavouritesScreen,
    Menu: MenuScreen,
    Settings: UserSettingsScreen
  },
  {
    initialRouteName : 'Menu',
    tabBarOptions: {
      activeTintColor: "#308312"
    }
  }
);

const MainNavigator = createSwitchNavigator({
  Start: StartSettingsScreen,
  Main: MainTabs
});

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
