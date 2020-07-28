//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Asset } from 'expo-asset';
import { LinearGradient } from 'expo-linear-gradient'

import Buttons from './Buttons';
import { ExerciseDataModel } from '../../../DataModels/ExerciseDataModel';
import BackNavigator from '../../../Shared/BackNavigator';
import StyleConfigs from '../../../Shared/StyleConfigs';
import ExerciseInfo from './ExerciseInfo';

interface IProps {
    data: ExerciseDataModel,
    navigation: any
}

// create a component
const PictureSection = ({ navigation, data }: IProps) => {

    const picUri = Asset.fromModule(data.excerciseImage).uri;

    return (
        <LinearGradient
            style={styles.container}
            colors={['rgba(44, 49, 67, 0)', '#2C3143']}>
            <Image source={{ uri: picUri }} style={styles.picture}>
                <Buttons />
                <ExerciseInfo data={data} />
                <Text style={styles.title}>{data.title}</Text>
                <BackNavigator navigation={navigation} />
            </Image>
        </LinearGradient>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        left: 0,
        right: 0,
        flexDirection: 'column'
    },
    picture: {
        flexDirection: 'column-reverse',
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0.192,
        color: '#FFFFFF',
        paddingBottom: 20,
        left: 15
    },
});

//make this component available to the app
export default PictureSection;
