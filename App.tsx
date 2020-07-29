
import React from 'react';

import * as Font from 'expo-font';
import { FontDisplay } from 'expo-font';
import { AppLoading } from 'expo';
import { AuthUserProvider } from './app/Providers/AuthUserProvider';
import Routes from './app/Providers/Routes';






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

    if (!this.state.fontsLoaded)
      return <AppLoading />;
    return (
      <AuthUserProvider>
        <Routes />
      </AuthUserProvider>
    );
  }

}

