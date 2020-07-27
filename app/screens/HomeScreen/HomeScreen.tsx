import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Button, AirbnbRating } from 'react-native-elements';
import { Asset } from 'expo-asset';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import Icon from 'react-native-vector-icons/FontAwesome5';


const vationImgURI = Asset.fromModule(require('../../../assets/vation.png')).uri;
const attachmentImgURI = Asset.fromModule(require('../../../assets/attachment.png')).uri;

export default function HomeScreen({ navigation: { goBack } }) {

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.pictureContainer}
                colors={['rgba(44, 49, 67, 0)', '#2C3143']}>
                <Image
                    source={{ uri: vationImgURI }}
                    style={styles.picture}>
                    <Button
                        buttonStyle={[styles.doneBuuton]}
                        titleStyle={styles.buttonText}
                        icon={
                            <Icon
                                name="check-circle"
                                style={styles.icons}
                                size={14}
                                color={'#fff'}
                            />
                        }
                        title="Mark as done"
                    />
                    <Button
                        buttonStyle={[styles.playBuuton]}
                        titleStyle={styles.buttonText}
                        icon={
                            <Icon
                                name="play-circle"
                                style={styles.icons}
                                size={14}
                                color={'#fff'}
                            />
                        }
                        title="Play video"
                    />
                    <View style={styles.infoContainer}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={[styles.captionInInfoSection, styles.textFontStyleInInfoSection]}>Difficulty</Text>
                            <AirbnbRating defaultRating={3} size={14} isDisabled={true} showRating={false} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.captionInInfoSection, styles.textFontStyleInInfoSection]}>Iterations</Text>
                            <Text style={[styles.textInInfoSection, styles.textFontStyleInInfoSection]}>10 Sätze</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.captionInInfoSection, styles.textFontStyleInInfoSection]}>Duration</Text>
                            <Text style={[styles.textInInfoSection, styles.textFontStyleInInfoSection]}>15 Minuten</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Child’s pose</Text>

                    <TouchableOpacity style={styles.backButtonCantiner} onPress={() => goBack()}>

                        <Icon name="angle-left" style={styles.icons} size={20} color={'#fff'} />
                        <Text style={styles.backButtonText}>Back</Text>

                    </TouchableOpacity>



                </Image>

            </LinearGradient>
            <ScrollView style={styles.descContainer}>
                <Text style={styles.description}>
                    Description
            </Text>

                <Text style={styles.descText}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
             </Text>
                <Text style={styles.attchmentTitle}>Attachments</Text>
                <View style={{ top: 65, flexDirection: 'row' }}>
                    <Image source={{ uri: attachmentImgURI }} style={{ width: 160, height: 100, borderRadius: 8 }} />
                    <Image source={{ uri: attachmentImgURI }} style={{ width: 160, height: 100, borderRadius: 8, marginLeft: 15 }} />
                </View>
            </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //   backgroundColor: StyleConfigs.colors.screenBgColor,
    },
    pictureContainer: {
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
    doneBuuton: {
        marginLeft: '8%',
        marginRight: '8%',
        marginBottom: 20,
        borderRadius: 12,
        height: 48,

        backgroundColor: '#5BC58C',

    },
    playBuuton: {
        marginLeft: '8%',
        marginRight: '8%',
        marginBottom: 8,
        borderRadius: 12,
        height: 48,
        backgroundColor: '#6C9EFE',

    },

    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.192,

    },
    infoContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,

        justifyContent: 'space-between'
    },
    captionInInfoSection: {
        width: 48,
        height: 16,
        color: '#767B8F',
        fontSize: 10,
    },
    textFontStyleInInfoSection: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
        letterSpacing: 0.192,
    },
    textInInfoSection: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    title: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0.192,
        color: '#FFFFFF',
        paddingBottom: 20,
        left: 15
    },
    backButtonCantiner: {
        position: 'absolute',
        top: 60,
        flexDirection: 'row',
        left: 15,
        justifyContent: 'space-between'

    },
    backButtonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.192,
        color: '#FFFFFF',
        marginLeft: 5,
        top: 2,

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
