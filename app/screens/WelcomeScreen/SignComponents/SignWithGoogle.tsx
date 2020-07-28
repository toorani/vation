import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as AppAuth from 'expo-app-auth';


import SharedStyles from '../ScreenSharedStyles'
import StyleConfigs from '../WelcomeStyleConfigs'
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
    onUserAuthenticated: () => void;
}


export default function SignWithGoogle(props: IProps) {

    const { onUserAuthenticated } = props;
    let [showLoding, setShowLoding] = useState<boolean>(false);

    async function signInAsync() {
        try {
            setShowLoding(true);
            await AppAuth.authAsync(config);
            onUserAuthenticated();
            // navigation.navigate('Home')
        }
        catch (e) { }
        finally {
            setShowLoding(false);
        }
    }
    return (
        <Button
            buttonStyle={[SharedStyles.signInButton, styles.button]}
            titleStyle={SharedStyles.signInButtonText}
            loading={showLoding}

            onPress={async () => await signInAsync()}
            icon={
                <Icon
                    name="google"
                    style={SharedStyles.icons}
                    size={StyleConfigs.icons.size}
                    color={StyleConfigs.colors.textColor}
                />
            }
            title="Sign In with Google"
        />
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: StyleConfigs.colors.buttons.googleBgColor,
    },
});

const config = {
    issuer: 'https://accounts.google.com',
    clientId: '627296556054-vqdb0dshuo55589avnncl80n59eucdkr.apps.googleusercontent.com',
    scopes: ['openid', 'profile', 'email']
};




