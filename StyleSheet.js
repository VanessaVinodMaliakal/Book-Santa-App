import * as React from 'react'
import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({ 
container: {
    flex: 1, 
    backgroundColor: "#6fc0b8" 
},
loginBox: { 
    width: "80%", 
    height: RFValue(50), 
    borderWidth: 1.5, 
    borderColor: "#ffffff", 
    fontSize: RFValue(20), 
    paddingLeft: RFValue(10) 
}, 
button: { 
    width: "80%", 
    height: RFValue(50), 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: RFValue(25), 
    backgroundColor: "#ffff", 
    shadowColor: "#000", 
    marginBottom: RFValue(10), 
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10.32, 
    elevation: 16 
},
buttonText: { 
    color: "#32867d", 
    fontWeight: "200", 
    fontSize: RFValue(20) 
}, 
label: { 
    fontSize: RFValue(13), 
    color: "#717D7E", 
    fontWeight: "bold", 
    paddingLeft: RFValue(10), 
    marginLeft: RFValue(20) }, 
    formInput: { width: "90%", height: RFValue(45), 
    padding: RFValue(10),
    borderWidth: 1, 
    borderRadius: 2, 
    borderColor: "grey", 
    paddingBottom: RFValue(10), 
    marginLeft: RFValue(20), 
    marginBottom: RFValue(14) 
}, 
registerButton: { 
    width: "75%", 
    height: RFValue(50), 
    marginTop: RFValue(20), 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: RFValue(3), 
    backgroundColor: "#32867d", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.44, 
    shadowRadius: 10.32, 
    elevation: 16, 
    marginTop: RFValue(10) 
}, 
registerButtonText: { 
    fontSize: RFValue(23), 
    fontWeight: "bold", 
    color: "#fff" 
},
cancelButtonText: { 
    fontSize: RFValue(20), 
    fontWeight: "bold", 
    color: "#32867d", 
    marginTop: RFValue(10) 
}, 
scrollview: { 
    flex: 1, 
    backgroundColor: "#fff" 
}, 
signupView: { 
    flex: 0.05, 
    justifyContent: "center", 
    alignItems: "center" 
}, 
signupText: { 
    fontSize: RFValue(20), 
    fontWeight: "bold", 
    color: "#32867d" 
}, 
santaView: { 
    flex: 0.85, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: RFValue(10) 
}, 
santaImage: { 
    width: "70%", 
    height: "100%", 
    resizeMode: "stretch" 
}, 
TextInput: { 
    flex: 0.5, 
    alignItems: "center", 
    justifyContent: "center"
}, 
bookImage: { 
    width: "100%", 
    height: RFValue(220) 
},
keyBoardStyle : { 
    flex:1, 
    alignItems:'center', 
    justifyContent:'center' 
}, 
formTextInput:{ 
    width:"75%", 
    height:35, 
    alignSelf:'center', 
    borderColor:'#ffab91', 
    borderRadius:10, 
    borderWidth:1, 
    marginTop:20, 
    padding:10, 
}, 
drawerItemsContainer:{
     flex:0.8 
}, 
logOutContainer : { 
    flex:0.2, 
    justifyContent:'flex-end', 
    paddingBottom:30 
}, 
logOutButton : { 
    height:30, 
    width:'100%', 
    justifyContent:'center', 
    padding:10 
}, 
logOutText:{ 
    fontSize: 30, 
    fontWeight:'bold' 
},
KeyboardAvoidingView:{ 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center' 
}, 
modalTitle :{ 
    justifyContent:'center', 
    alignSelf:'center', 
    fontSize:30, 
    color:'#ff5722', 
    margin:50 
}, 
modalContainer:{ 
    flex:1, 
    borderRadius:20, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:"#ffff", 
    marginRight:30, 
    marginLeft : 30, 
    marginTop:80, 
    marginBottom:80, 
}, 
formTextInput:{ 
    width:"75%", 
    height:35, 
    alignSelf:'center', 
    borderColor:'#ffab91', 
    borderRadius:10, 
    borderWidth:1, 
    marginTop:20, 
    padding:10 
},
});


