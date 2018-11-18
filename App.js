import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <Image style={styles.image} source={require('./assets/images/foodthief.png')} />
          <TextInput placeholder="Username" placeholderTextColor='#999'
            style={styles.loginInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextInput
            placeholder="Password" placeholderTextColor='#999'
            style={styles.loginInput}
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.text2}
          />
          <Button onPress={() => {}} title="Login" />
          <Text style={{color: "rgba(0,0,0,0.5)"}}>Forgot Password?</Text>
        </SafeAreaView>
      );
    }
  }
  // {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
  // <AppNavigator />
  // <Image style={styles.image} source={require('./assets/images/file.jpeg')} />
  // <Text style={styles.centerText}>"You have a beautiful mind."</Text>
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/foodthief.png'),
        require('./assets/images/file.jpeg'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: "10%",
    marginRight: "10%",
  },
  leftJustifedText: {
    //justifyContent: 'left',
    textAlign: 'left'
  },
  image : {
    resizeMode: "contain",
    marginBottom: 50,
    width: "100%"
  },
  loginInput: {
    height: 40, 
    width: "100%", 
    borderColor: 'gray', 
    borderWidth: 1,
    paddingHorizontal: 10
  }
});