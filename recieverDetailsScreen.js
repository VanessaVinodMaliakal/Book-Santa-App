import React from 'react';
import { StyleSheet, Text, View, Card } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js' 

export default class RecieverDetails extends React.Component{
    constructor(){
        super()
        this.state={
            bookName: '',
            reason: '',
            username: '',
            address: '',
            contactNo: ''
        }
    }
    render(){
        return(
            <View>
                <AppHeader title = 'Reciever Details'/>
                <Card>
                <Text style={styles.signupText}>book name : {this.state.bookName}</Text>
                </Card>
                <Card>
                <Text style={styles.signupText}>reason : {this.state.reason}</Text>
                </Card>
                <Card>
                <Text style={styles.signupText}>username : {this.state.username}</Text>
                </Card>
                <Card>
                <Text style={styles.signupText}>address : {this.state.address}</Text>
                </Card>
                <Card>
                <Text style={styles.signupText}>contact no : {this.state.contactNo}</Text>
                </Card>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.cancelButonText}>I want to donate</Text>
                </TouchableOpacity>
            </View>
        )
    }
}