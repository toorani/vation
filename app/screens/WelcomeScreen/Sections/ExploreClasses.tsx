import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SharedStyles from '../ScreenSharedStyles'
import StyleConfigs from '../WelcomeStyleConfigs'


export default function ExploreClasses() {

    return (
        <View style={styles.view}>
            <Text style={[SharedStyles.textColor, styles.text]}>
                Explore the classes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: 18,
        alignItems: 'center'
    },
    text: {
        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: "normal",
        fontSize: 15,
        fontWeight: "800",
        lineHeight: 20,
        alignItems: 'center'
    },

});