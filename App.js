import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen.js'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {TabNavigator} from './components/tabNavigator.js'
import {AppDrawerNavigator} from './components/drawerNavigator.js'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  welcome : WelcomeScreen,
  drawer : AppDrawerNavigator
})
const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
