import React from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import {styles} from '../StyleSheet.js'
import AppHeader from '../components/header.js'
import { KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import db from '../Config.js'
import firebase from 'firebase'

export default class Request extends React.Component{
  constructor(){
    super()
    this.state={
      book: '',
      reason: '',
      userID: firebase.auth().currentUser.email,
      requestID: ''
    }
  }
  addRequest=()=>{
    db.collection('request').add({
      userID: this.state.userID,
      bookName: this.state.book,
      reason: this.state.reason,
      requestID: this.createUniqueID() 
    })
    this.setState({
      book: '',
      reason: ''
    })
    return Alert.alert('Request added successfully')
  }
  createUniqueID=()=>{
    return Math.random().toString(36).substring(7)
  }
  render(){
    return (
      <View style={styles.container}>
       <AppHeader title = 'Request books' navigation={this.props.navigation}/>
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
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{
        this.addRequest()
      }}><Text style={styles.buttonText}>Request</Text></TouchableOpacity>
       </KeyboardAvoidingView>
      </View>
    );
  }
}

