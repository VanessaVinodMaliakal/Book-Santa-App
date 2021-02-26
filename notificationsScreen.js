import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js'

export default class Notifications extends React.Component{
    constructor(){
        super()
        this.state={
            notificationData: '',
            emailID: firebase.auth().currentUser.email,
        }
    }
    getNOtifications=()=>{
        db.collection('notifications').where('targetedUserID','==',this.state.emailID).onSnapshot((docList)=>{
            if(docList.docs.length !== 0){
                docList.docs.map((doc)=>{
                    var docData = doc.data()
                    this.setState({
                        notificationData: docData
                    })
                    console.log(this.state.notificationData,'12345')
               })
            }
        })
    }
    componentDidMount(){
        this.getRequest()
    }
    render(){
        return (
            <View style={styles.container}>
                <AppHeader title = 'Notifications'/>
                <View style={{flex: 1}}>
                <FlatList 
                    data ={this.state.notificationData}
                    renderItem={({item})=>{
                    return(
                        <View style={{borderBottomWidth : 2}}>
                        <Text>{item['bookName']}</Text>
                        <Text>{item['date']}</Text>
                        <Text>{item['donorID']}</Text>
                        <Text>{item['message']}</Text>
                        <Text>{item['notificationStatus']}</Text>
                        <Text>{item['requestID']}</Text>
                        <Text>{item['targetedUserID']}</Text>
                        </View>
                    )
                    }}
                ></FlatList>
                </View>
            </View>
        );
    }
}