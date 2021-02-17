import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {styles} from '../StyleSheet.js'
import AppHeader from '../components/header.js'
import { KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class Request extends React.Component{
  constructor(){
    super()
    this.state={
      book : '',
      reason : ''
    }
  }
  render(){
    return (
      <View style={styles.container}>
       <AppHeader title = 'Request books'/>
       <KeyboardAvoidingView style={styles.keyBoardStyle}>
       <TextInput style={styles.formTextInput} 
       placeholder = 'Enter the book name'
       onChangeText={(text)=>{
        this.setState({
          book : text
        })
       }}></TextInput>
       <TextInput style={styles.formTextInput} 
       placeholder = 'Enter the reason for the request'
       onChangeText={(text)=>{
        this.setState({
          reason : text
        })
      }}></TextInput>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Request</Text></TouchableOpacity>
       </KeyboardAvoidingView>
      </View>
    );
  }
}

