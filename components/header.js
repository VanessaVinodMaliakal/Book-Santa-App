import * as React from 'react'
import {View} from 'react-native'
import {Header,Icon} from 'react-native-elements'

 export default class AppHeader extends React.Component{
     render(){
         return(
            <Header
            backGroundColor = {"#B8B8B8"}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
            rightComponent={<Icon 
                name='bell' 
                type='font-awesome' 
                color='#fff' 
                size={25} 
                onPress={()=>{
                  this.props.navigation.toggleDrawer()
                }}></Icon>}
            leftComponent={<Icon 
                name='bars' 
                type='font-awesome' 
                color='#fff' 
                size={25}></Icon>}
            />
         )
     }
 }