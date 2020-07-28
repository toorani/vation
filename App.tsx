
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { navigationRef, isReadyRef } from './app/Shared/RootNavigation';
import { FontDisplay } from 'expo-font';
import { AppLoading } from 'expo';

import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';




const Stack = createStackNavigator();


export default class App extends React.Component {

  state = { fontsLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      Inter: { uri: require('./assets/fonts/Inter/Inter.otf'), display: FontDisplay.SWAP },
      SFProText: { uri: require('./assets/fonts/SFProText/SFProText.ttf'), display: FontDisplay.SWAP },
      Avenir: { uri: require('./assets/fonts/Avenir/AvenirLTStd-Book.otf'), display: FontDisplay.SWAP },
      Roboto: { uri: require('./assets/fonts/Roboto/Roboto-Regular.ttf'), display: FontDisplay.SWAP },
    })
    this.setState({ fontsLoaded: true });
  }



  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer  >
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer >
      );
    } else {
      return <AppLoading />;
    }
  }

}

