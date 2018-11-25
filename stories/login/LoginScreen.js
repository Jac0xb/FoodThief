import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, Button, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {

  state = { password : "", username: ""}
  
  render() {
    return (<SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('./../../assets/images/foodthief.png')} />
      <View style={styles.loginGroup}>
        <TextInput placeholder="Username" placeholderTextColor='rgb(196, 202, 211)'
            style={styles.loginInput}
            onChangeText={(username) => this.setState({username})}
            onSubmitEditing={() => this.passwordInput.focus()}
            value={this.state.username}
        />
        <TextInput
            ref={(input) => { this.passwordInput = input; }}
            placeholder="Password" placeholderTextColor='rgb(196, 202, 211)'
            style={styles.loginInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
        />
        <TouchableHighlight underlayColor="rgba(0,0,0,0.1)" style={[styles.loginButton, styles.shadow]} onPress={this.props.submitFunction} > 
            <Text color="white" style={{color: "white", fontFamily: "roboto", lineHeight: 40}}>Login</Text> 
        </TouchableHighlight>
        <Text style={styles.forgetText}>Forgot Password?</Text>
      </View>
    </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
    forgetText: {
      color: "rgba(0,0,0,0.5)",
      textDecorationLine: 'underline'
    },
    
    container: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginLeft: "10%",
      marginRight: "10%"
    },
    loginGroup: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      textAlign: 'center'
    },
    image : {
      flex: 2,
      resizeMode: "contain",
      marginBottom: 50,
      width: "100%"
    },
    loginInput: {
      height: 40, 
      width: "100%", 
      borderColor: 'rgb(196, 202, 211)', 
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10
    },
    loginButton: {
      width: "100%",
      backgroundColor: "#6BD968",
      marginBottom: 25,
      marginTop: 15,
      borderRadius: 16,
      alignItems: 'center',
      height: 40,
      
    },
    devBorder: {
      borderWidth: 1,
      borderColor: "#4646DA"
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    }
});

export default LoginScreen;