import * as React from 'react';
import { StyleSheet, Text,TextInput, View, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import {styles} from '../StyleSheet.js'

export default class WelcomeScreen extends React.Component {
  constructor(){
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
  signUpModel=()=>{
    return(
    <Modal 
    animationType='slide'
    transparent={true}
    visible={this.state.modalVisible}><ScrollView>
      <View style={styles.signupView}><Text style={styles.signupText}>Sign up</Text></View>
      <View style={{flex:0.95}}>
        <Text style={styles.label}>First name</Text>
        <TextInput 
        style={styles.formInput} 
        placeHolder='first Name'
        onChangeText={(text)=>{
          this.setState({
            firstName : text
          })
        }}></TextInput>
        <Text style={styles.label}>Last name</Text>
        <TextInput 
        style={styles.formInput} 
        placeHolder='last Name'
        onChangeText={(text)=>{
          this.setState({
            lastName : text
          })
        }}></TextInput>
        <Text style={styles.label} >Contact Number</Text>
        <TextInput 
        placeHolder='contact Number'
        style={styles.formInput}
        onChangeText={(text)=>{
          this.setState({
            contactNo : text
          })
        }}></TextInput>
        <Text style={styles.label} >Address</Text>
        <TextInput 
        placeHolder='address'
        style={styles.formInput}
        onChangeText={(text)=>{
          this.setState({
            address : text
          })
        }}></TextInput>
        <Text style={styles.label} >Email ID</Text>
        <TextInput 
        placeHolder='emailID'
        style={styles.FormInput}
        onChangeText={(text)=>[
          this.setState({
            emailID : text
          })
        ]}></TextInput>
        <Text style={styles.label} >Password</Text>
        <TextInput 
        placeHolder='password'
        style={styles.FormInput}
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
      </ScrollView></Modal>
    )
  }
  userSignUp=()=>{

  }
  userLogin=()=>{

  }
  render(){
    return (
      <View style={styles.container}>
        {this.signUpModal()}
        <View style={{flex : 0.25}}>
          <View style={{flex : 0.45}}>
          <View style={styles.textInput}>
          <TextInput 
          placeHolder = 'username'
          style={styles.TextInput}
          onChangeText={(text)=>{
            this.setState({
              emailID : text
            })
          }}></TextInput>
          <TextInput 
          placeHolder = 'password'
          style={styles.TextInput}
          onChangeText={(text)=>{
            this.setState({
              password : text
            })
          }}></TextInput>
        </View>
        </View>
        <View style={{flex : 0.5, alignItems : 'center'}}>
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
      </View>
    );
  }
}
