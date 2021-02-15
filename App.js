import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen.js'
import Request from './screens/requestScreen.js'
import Donate from './screens/donateScreen.js'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <WelcomeScreen/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  request : Request,
  donate : Donate
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
