import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SharedStyles from '../SharedStyles'
import StyleConfigs from '../StyleConfigs'
import { ViewStyleProp } from '../../../Shared/Props';


export default function HeaderSection({style}: ViewStyleProp) {
  
    return (
        <View style={style}>
            <Text style={[SharedStyles.textColor, styles.textBody]}>
                YOUR PERSONAL TRAINER, RETHOUGHT.
        </Text>
        </View>
    );


}

const styles = StyleSheet.create({
    textBody: {
        position: "absolute",
        left: "8.8%",
        right: "5.07%",
        top: 110,

        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: "normal",
        fontSize: 44,
        fontWeight: "900",
        lineHeight: 50,

    },

});

