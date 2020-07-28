import { Platform } from "react-native";

export default {
    colors: {
        screenGradient: {
            start: '#33394c',
            end: '#010101'
        },
        textColor: '#FFFFFF',
        buttons: {
            doneBgColor: '#5BC58C',
            playBgColor: '#6C9EFE',
        },
        iconColor:'#fff'
    },
    fonts: {
        Avenir: Platform.OS === 'android' ? 'System' : 'Avenir',
        Roboto: Platform.OS === 'ios' ? 'System' : 'Roboto',
        SFProText :'System'
    },
    icons:{
        size : 14,
    }
}