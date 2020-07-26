import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import SharedStyles from '../SharedStyles'
import StyleConfigs from '../StyleConfigs'


export default function SignUpWithEmail() {
    return (
        <Button
                buttonStyle={[SharedStyles.signInButton, styles.button]}
                titleStyle={SharedStyles.signInButtonText}
                title="Sign Up with Email"
            />
    );
    
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: StyleConfigs.colors.buttons.emailBgColor,
    },
});