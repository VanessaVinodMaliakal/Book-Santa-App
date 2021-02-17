import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js'

export default class Donate extends React.Component{
  render(){
    return (
      <View style={styles.container}>
       <AppHeader title = 'Donate books'/>
      </View>
    );
  }
}

