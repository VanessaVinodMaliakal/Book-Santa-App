import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js'
import db from '../Config.js'

export default class Donate extends React.Component{
    constructor(){
        super()
        this.state={
            requestData: ''
        }
    }
    getRequest=()=>{
        db.collection('request').onSnapshot((docList)=>{
            if(docList.docs.length !== 0){
                docList.docs.map((doc)=>{
                    var docData = doc.data()
                    this.setState({
                        requestData: docData
                    })
                    console.log(this.state.requestData,'Vanessa')
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
                <AppHeader title = 'Donate books'/>
                <View style={{flex: 1}}>
                <FlatList 
                    data ={this.state.requestData}
                    renderItem={({item})=>{
                    return(
                        <View style={{borderBottomWidth : 2}}>
                        <Text>{item['bookName']}</Text>
                        <Text>{item['reason']}</Text>
                        <Text>{item['requestID']}</Text>
                        <Text>{item['userID']}</Text>
                        </View>
                    )
                    }}
                ></FlatList>
                </View>
            </View>
        );
    }
}

