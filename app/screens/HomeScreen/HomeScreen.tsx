import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import PictureSection from './Components/PictureSection';
import DescriptionSection from './Components/DescriptionSection';


export default function HomeScreen({ navigation, route }) {
    const { data } = route.params;
    return (
        <View style={styles.container}>
            <PictureSection data={data} navigation={navigation} />
            <DescriptionSection data={data} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //   backgroundColor: StyleConfigs.colors.screenBgColor,
    },

    descContainer: {
        flexDirection: 'column',
        left: 15,

    },
    description: {
        top: 20,
        fontFamily: 'System',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#2C3143',
    },
    descText: {
        top: 25,
        width: 343,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.192,
        color: '#707070',
    },
    attchmentTitle: {
        top: 60,
        fontFamily: 'System',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#2C3143',
    },
    icons: {
        marginRight: 5
    },


});
