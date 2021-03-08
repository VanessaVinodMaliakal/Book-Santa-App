import * as React from 'react'
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'; 
import { DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'
import { styles } from '../StyleSheet';

export default class CustomSideDrawer extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}></DrawerItems>
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity
                    style={styles.logOutButton} 
                    onPress={()=>{
                        firebase.auth().signOut()
                        this.props.navigation.navigate('welcome')
                    }}>
                        <Text>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}