import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as AppAuth from 'expo-app-auth';


import SharedStyles from '../SharedStyles'
import StyleConfigs from '../StyleConfigs'
import Icon from 'react-native-vector-icons/FontAwesome5';



export default function SignWithGoogle() {

    // let [authState, setAuthState] = useState(null);
    let [showLoding, setShowLoding] = useState<boolean>(false);

    async function signInAsync() {
        try{
            let authState = await AppAuth.authAsync(config);
            return authState;
        }
        finally{
            setShowLoding(false);
        }
    }
    return (
        <Button
            buttonStyle={[SharedStyles.signInButton, styles.button]}
            titleStyle={SharedStyles.signInButtonText}
            loading={showLoding}

            onPress={async () => {
                setShowLoding(true);
                const _authState = await signInAsync();
            }}
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




