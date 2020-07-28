//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { ExerciseDataModel } from '../../../DataModels/ExerciseDataModel';
import StyleConfigs from '../../../Shared/StyleConfigs';

interface IProps {
    data: ExerciseDataModel
}

// create a component
const ExerciseInfo = ({ data }: IProps) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', }}>
                <Text style={[styles.caption, styles.textFontStyle]}>Difficulty</Text>
                <AirbnbRating defaultRating={data.difficulty} size={14} isDisabled={true} showRating={false} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.caption, styles.textFontStyle]}>Iterations</Text>
                <Text style={[styles.text, styles.textFontStyle]}>{data.iterations} Sätze</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.caption, styles.textFontStyle]}>Duration</Text>
                <Text style={[styles.text, styles.textFontStyle]}>{data.duration} Minuten</Text>
            </View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between'
    },
    caption: {
        width: 48,
        height: 16,
        color: '#767B8F',
        fontSize: 10,
    },
    textFontStyle: {
        fontFamily: StyleConfigs.fonts.Inter,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
        letterSpacing: 0.192,
    },
    text: {
        fontSize: 14,
        color: '#FFFFFF'
    },
});

//make this component available to the app
export default ExerciseInfo;
