import * as React from 'react'
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native'
import {styles} from '../StyleSheet.js'
import firebase from 'firebase'
import db from '../Config.js' 
import AppHeader from '../components/header.js'

export default class Settings extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastname: '',
            address: '',
            contactNo: '',
            emailID: firebase.auth().currentUser.email,
            docID: '',
            
        }
    }
    componentDidMount=async()=>{
        const docList = await db.collection('user').where('emailID','==',this.state.emailID).get()
        //console.log(docList)
         if(docList.docs.length !== 0){
             docList.docs.map((doc)=>{
                 var docData = doc.data()
                 console.log(doc['id'], 'Vanessa333333333333333333333333')
                 this.setState({
                     'firstName': docData['firstName'],
                     'lastName': docData['lastName'],
                     'address': docData['address'],
                     'contactNo': docData['contactNo'],
                     'docID': doc['id']
                })
             })
         }
    }
    saveData=()=>{
        db.collection('user').doc(this.state.docID).update({
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'contactNo': this.state.contactNo,
            'address': this.state.address,
        })
    }
    
    render(){
        return(
            <View>
                <View>
                <AppHeader title = 'Settings'/>
                </View>
                <View>
                    <Text style={styles.label}>First name</Text>
                    <TextInput 
                    style={styles.formInput} 
                    placeHolder='first Name'
                    value={this.state.firstName}
                    onChangeText={(text)=>{
                        this.setState({
                            firstName : text
                        })
                    }}
                    ></TextInput>
                    <Text style={styles.label}>Last name</Text>
                    <TextInput 
                    style={styles.formInput} 
                    placeHolder='last Name'
                    value={this.state.lastName}
                    onChangeText={(text)=>{
                        this.setState({
                            lastName : text
                        })
                    }}
                    ></TextInput>
                    <Text style={styles.label} >Contact Number</Text>
                    <TextInput 
                    placeHolder='contact Number'
                    style={styles.formInput}
                    value={this.state.contactNo}
                    onChangeText={(text)=>{
                        this.setState({
                            contactNo : text
                        })
                    }}
                    ></TextInput>
                    <Text style={styles.label} >Address</Text>
                    <TextInput 
                    placeHolder='address'
                    style={styles.formInput}
                    value={this.state.address}
                    onChangeText={(text)=>{
                        this.setState({
                            address : text
                        })
                    }}
                    ></TextInput>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={this.saveData}>
                    <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}