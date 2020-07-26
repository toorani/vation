import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SharedStyles from '../SharedStyles'
import StyleConfigs from '../StyleConfigs'
import { ViewStyleProp } from '../../../Shared/Props';


export default function MiddleSection({ style }: ViewStyleProp) {

    return (
        <View style={style}>
            <Text style={[SharedStyles.textColor, styles.textBody]}>
                Your everyday life is stressful enough.Stay flexible with online support in everyday life.
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textBody: {
        position: "absolute",
        left: "9.07%",
        right: "28.53%",
    
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 17,
        lineHeight: 20,
    
      },

});