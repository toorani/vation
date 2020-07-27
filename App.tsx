
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import * as Font from 'expo-font';


const Stack = createStackNavigator();


export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      Inter: require('./assets/fonts/Inter/Inter.otf'),
      SFProText: require('./assets/fonts/SFProText/SFProText.ttf'),
      Avenir: require('./assets/fonts/Avenir/AvenirLTStd-Book.otf'),
      Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    })

  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer >

    );
  }

}

