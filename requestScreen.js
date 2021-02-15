import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../StyleSheet.js'

export default class Request extends React.Component{
  render(){
    return (
      <View style={styles.container}>
       <Text>request</Text>
       <TextInput style={styles.TextInput}></TextInput>
       <TextInput style={styles.TextInput}></TextInput>
      </View>
    );
  }
}

