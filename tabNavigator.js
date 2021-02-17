import * as React from 'react'
import Request from '../screens/requestScreen.js'
import Donate from '../screens/donateScreen.js'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const TabNavigator = createBottomTabNavigator({
  request : Request,
  donate : Donate
})

