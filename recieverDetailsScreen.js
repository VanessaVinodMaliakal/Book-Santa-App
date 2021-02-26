import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js'

export default class Notifications extends React.Component{
    render(){
        return(
            <View>
                <AppHeader title = 'Reciever Details'/>
            </View>
        )
    }
}