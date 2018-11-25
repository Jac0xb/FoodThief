import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import LoginScreen from "./stories/login/LoginScreen.js";
import UserNavigation from "./navigation/AppNavigator";
import { View, Text } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    currentWindow: "login"
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
      if (this.state.currentWindow == "login")
        return <LoginScreen submitFunction={() => this.setState({currentWindow: "user"})} />
      if (this.state.currentWindow == "user")
        return <UserNavigation />
      else {
        return <LoginScreen submitFunction={() => this.setState({currentWindow: "user"})} />
      }
    }
  }
  
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
        'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
        'osward': require('./assets/fonts/Oswald-Regular.ttf'),
        'osward-bold': require('./assets/fonts/Oswald-Bold.ttf'),
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