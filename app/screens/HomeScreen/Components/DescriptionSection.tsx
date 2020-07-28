//import liraries
import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import StyleConfigs from '../../../Shared/StyleConfigs';
import { ExerciseDataModel } from '../../../DataModels/ExerciseDataModel';
import { Asset } from 'expo-asset';

interface IProps {
    data: ExerciseDataModel
}


// create a component
const DescriptionSection = ({ data }: IProps) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.body} >{data.description}</Text>
            <Text style={styles.attachmentTitle}>Attachments</Text>
            <View style={{ top: 65, flexDirection: 'row' }}>
                {
                    data.attachments.map((item, key) => {     
                        let attachmentImgURI = Asset.fromModule(item).uri;
                        if (key === 0)
                            return (<Image source={{ uri: attachmentImgURI }} key={key} style={styles.attachFile} />);
                        return (<Image source={{ uri: attachmentImgURI }} key={key} style={[styles.attachFile, styles.secondAttachFile]} />);
                    })
                }
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        left: 15,
    },
    title: {
        top: 20,
        fontFamily: StyleConfigs.fonts.Title,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#2C3143',
    },
    body: {
        top: 25,
        width: 343,
        fontFamily: StyleConfigs.fonts.Inter,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.192,
        color: '#707070',
    },
    attachmentTitle: {
        top: 60,
        fontFamily: StyleConfigs.fonts.Title,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#2C3143',
    },
    attachFile: {
        width: 160,
        height: 100,
        borderRadius: 8,
    },
    secondAttachFile: {
        marginLeft: 15
    }
});

//make this component available to the app
export default DescriptionSection;
