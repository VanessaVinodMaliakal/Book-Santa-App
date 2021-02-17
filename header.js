import * as React from 'react'
import {View} from 'react-native'
import {Header} from 'react-native-elements'

 export default class AppHeader extends React.Component{
     render(){
         return(
            <Header
            backGroundColor = {"#B8B8B8"}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
            />
         )
     }
 }