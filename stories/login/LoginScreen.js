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
          value={this.state.username}
        />
        <TextInput
          placeholder="Password" placeholderTextColor='rgb(196, 202, 211)'
          style={styles.loginInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableHighlight style={styles.loginButton}> 
          <Button onPress={this.props.submitFunction} title="Login" />
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
    borderWidth: 1,
    borderColor: "#5885E8",
    marginBottom: 25
  },
  devBorder: {
    borderWidth: 1,
    borderColor: "#4646DA"
  } 
});

export default LoginScreen;