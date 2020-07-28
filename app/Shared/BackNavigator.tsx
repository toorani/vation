//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StyleConfigs from './StyleConfigs';


// create a component
const BackNavigator = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={styles.icons} size={24} color='#fff' />
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        flexDirection: 'row',
        left: 15,
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: StyleConfigs.fonts.Inter,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#FFFFFF',
        marginLeft: 5,
        top: 2,
    },
    icons: {
        marginRight: 5,
    },
});

//make this component available to the app
export default BackNavigator;
