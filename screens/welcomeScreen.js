import * as React from 'react';
import { StyleSheet, Text,TextInput, View, TouchableOpacity, Image, Modal, ScrollView, Alert, KeyboardAvoidingView} from 'react-native';
import {styles} from '../StyleSheet.js'
import firebase from 'firebase'
import db from '../Config.js'
import { KeyboardAvoidingViewComponent } from 'react-native';

export default class WelcomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      modalVisible : false,
      firstName : '',
      lastName : '',
      contactNo : '',
      address : '',
      emailID : '',
      password : ''
    }
  }
  signUpModal=()=>{
    return(
    <Modal 
    animationType='slide'
    transparent={true}
    visible={this.state.modalVisible}>
      <View style={styles.modalContainer}>
    <ScrollView style={{width: '100%'}}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
      <Text style={styles.modalTitle}>Sign up</Text>
      <View style={{flex:0.95}}>
        
        <TextInput 
        style={styles.formTextInput} 
        placeholder='first Name'
        onChangeText={(text)=>{
          this.setState({
            firstName : text
          })
        }}></TextInput>
       
        <TextInput 
        style={styles.formTextInput} 
        placeholder='last Name'
        onChangeText={(text)=>{
          this.setState({
            lastName : text
          })
        }}></TextInput>
        
        <TextInput 
        placeholder='contact Number'
        style={styles.formTextInput}
        onChangeText={(text)=>{
          this.setState({
            contactNo : text
          })
        }}></TextInput>
        
        <TextInput 
        placeholder='address'
        style={styles.formTextInput}
        onChangeText={(text)=>{
          this.setState({
            address : text
          })
        }}></TextInput>
        
        <TextInput 
        placeholder='emailID'
        style={styles.formTextInput}
        onChangeText={(text)=>[
          this.setState({
            emailID : text
          })
        ]}></TextInput>
        
        <TextInput 
        placeholder='password'
        style={styles.formTextInput}
        onChangeText={(text)=>{
          this.setState({
            password : text
          })
        }}></TextInput>
      </View>
      <View style={{flex:0.2, alignItems:'center'}}>
      <TouchableOpacity 
      style={styles.registerButton}
      onPress={()=>{
        this.userSignUp()
      }}><Text style={styles.registerButtonText}>Register</Text></TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{
        this.setState({
          modalVisible : false
        })
      }}><Text style={styles.cancelButonText}>Cancel</Text></TouchableOpacity></View>
      </KeyboardAvoidingView></ScrollView></View></Modal>
    )
  }
  userSignUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.emailID,this.state.password).then((response)=>{
      console.log(response)
      this.setState({
        modalVisible : false
      })
      db.collection('user').add({
        'firstName': this.state.firstName,
        'lastName': this.state.lastName,
        'address': this.state.address,
        'emailID': this.state.emailID,
        'password': this.state.password,
        'contactNo': this.state.contactNo
      })
    })
    .catch((error)=>{
      console.log(error['message'])
    })
  }
  userLogin=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.emailID,this.state.password).then(()=>{
      Alert.alert('logged in successfully')
      this.props.navigation.navigate('home')
    })
    .catch((error)=>{
      console.log(error['message'])
    })
  }
  render(){
    return (
      
      <View style={styles.container}>
        {this.signUpModal()}
          <View style={{flex:0.45}}>
          <TextInput 
          placeholder = 'username'
          style={styles.loginBox}
          onChangeText={(text)=>{
            this.setState({
              emailID : text
            })
          }}></TextInput>
          <TextInput 
          placeholder = 'password'
          style={styles.loginBox}
          onChangeText={(text)=>{
            this.setState({
              password : text
            })
          }}></TextInput>
        </View>
        <View style={{flex:0.5, alignItems:"center"}}>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.userLogin()
        }}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.setState({
            modalVisible : true
          })
        }}><Text>Sign up</Text></TouchableOpacity>
        </View>
      </View>
   
    );
  }
}