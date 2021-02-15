import * as React from 'react'
import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
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
} 
});
export default styles

