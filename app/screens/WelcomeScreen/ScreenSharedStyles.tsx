import {  StyleSheet } from 'react-native';
import StyleConfigs from './WelcomeStyleConfigs'

const  styles = StyleSheet.create({
    textColor: {
        color: StyleConfigs.colors.textColor
      },
      signInButton: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: 12,
        borderRadius: 50
    },

    signInButtonText: {
        fontFamily: StyleConfigs.fonts.SFProText,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 24,
    },
    icons: {
        marginRight: StyleConfigs.icons.marginRight
    },
});

export default styles; 