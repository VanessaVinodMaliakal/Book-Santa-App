import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AppHeader from '../components/header.js'
import {styles} from '../StyleSheet.js'
import db from '../Config.js'
import {ListItem, Avatar} from 'react-native-elements'
import RecieverDetails from './recieverDetailsScreen.js'

export default class Donate extends React.Component{
    constructor(){
        super()
        this.state={
            requestData: []
        }
    }
    getRequest=()=>{
        db.collection('request').onSnapshot((docList)=>{
            if(docList.docs.length !== 0){
                var docData = []
                docList.docs.map((doc)=>{
                    docData.push(doc.data())
                })
                this.setState({
                    requestData: docData
                })
                console.log(this.state.requestData,'Vanessa')
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
                    renderItem={({item,i})=>(
                   <ListItem key={i} bottomDivider>
                       <Avatar> </Avatar>
                            <ListItem.Content>
                                <ListItem.Title>{'book name'}</ListItem.Title>
                                <ListItem.Subtitle>{'REASON'}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Cheveron 
                            color='black'
                            onPress={()=>{
                                this.props.navigation.navigate('requestDetails')
                            }}></ListItem.Cheveron>
                    </ListItem>
                    )}
                ></FlatList>
                </View>
            </View>
        );
    }
}

