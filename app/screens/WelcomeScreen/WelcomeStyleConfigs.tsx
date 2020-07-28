import { Platform } from "react-native";

export default {
    colors: {
        screenBgColor: '#333A4D',
        screenGradient: {
            start: '#33394c',
            end: '#010101'
        },
        textColor: '#FFFFFF',
        buttons: {
            appleBgColor: '#000000',
            googleBgColor: '#0088FF',
            emailBgColor: '#5BC58B'
        }
    },
    fonts: {
        Avenir: Platform.OS === 'android' ? 'System' : 'Avenir',
        Roboto: Platform.OS === 'ios' ? 'System' : 'Roboto',
        SFProText :'System'
    },
    icons:{
        marginRight : 8,
        size : 24,
    }
}