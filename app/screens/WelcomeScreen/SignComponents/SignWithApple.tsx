import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import SharedStyles from '../SharedStyles'
import StyleConfigs from '../StyleConfigs'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SignWithApple() {
    return (
        <Button
                buttonStyle={[SharedStyles.signInButton, styles.button]}
                titleStyle={SharedStyles.signInButtonText}
                icon={
                    <Icon
                        name="apple"
                        style={SharedStyles.icons}
                        size={StyleConfigs.icons.size}
                        color={StyleConfigs.colors.textColor}
                    />
                }
                title="Sign In with Apple"
            />
    );
    
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: StyleConfigs.colors.buttons.appleBgColor,
    },
});