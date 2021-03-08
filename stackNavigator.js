import * as React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import Donate from '../screens/donateScreen.js'
import RecieverDetails from '../screens/recieverDetailsScreen.js'

export const AppStackNavigator = createStackNavigator({
    donate: Donate,
    recieverDetails: RecieverDetails
})