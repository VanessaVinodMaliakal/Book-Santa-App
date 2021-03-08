import * as React from 'react'
import {TabNavigator} from './tabNavigator.js'
import Settings from '../screens/settingsScreen.js'
import customSideDrawer from './customSideDrawer.js'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Notifications from '../screens/notificationsScreen.js'

export const AppDrawerNavigator = createDrawerNavigator({
    home: TabNavigator,
    settings: Settings,
    notify: Notifications

},{
    contentComponent: customSideDrawer
},{
    initialRootName: 'home'
})