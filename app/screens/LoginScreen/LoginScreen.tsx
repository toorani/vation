import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { Asset } from 'expo-asset';
import { TextInput } from 'react-native-gesture-handler';
import { loginWithEmail } from '../../Firebase/firebase';
import { LinearGradient } from 'expo-linear-gradient'
import StyleConfigs from '../../Shared/StyleConfigs';

const LoginScreen = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function onLogin() {
        try {
            await loginWithEmail(email, password);
            console.log('loginned')
        } catch (error) {
            Alert.alert(error.message)

        }
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.sectionTop}
                colors={['#9598a6', '#868895']}>
                <View style={styles.circles}>
                    <View style={styles.circle}></View>
                    <View style={styles.circleGr}></View>
                    <View style={styles.circleGr}></View>

                </View>
            </LinearGradient>
            <View style={styles.shadow}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeBack}>Welcome back</Text>
                    <Text style={styles.loginTitle}>Login to your account</Text>
                    <View style={styles.loginForm}>
                        <TextInput
                            style={styles.textBox}
                            value={email}
                            placeholder='Email'
                            onChangeText={(text) => { setEmail(text) }} />
                        <TextInput
                            style={styles.textBox}
                            value={password}
                            placeholder='Password'
                            onChangeText={(text) => { setPassword(text) }} />
                        <TextInput />
                        <Button title='Login' onPress={async () => onLogin()} />
                    </View>
                </View>


            </View>

        </View>

    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    sectionTop: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        height: '46%'
    },
    formSection: {
        height: '54%',
        // position: 'relative',
        top: -20,
        backgroundColor: '#fff',
    },
    shadow: {
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        backgroundColor: '#fff',
        height: '54%',
        top: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    circles: {
        position: 'absolute',
        bottom: 35,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff'
    },
    circleGr: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff',
        opacity: 0.5,
    },
    welcomeBack: {

        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: "normal",
        fontSize: 34,
        fontWeight: "900",
        lineHeight: 46,
        color: '#0A1F44'
    },
    welcomeContainer: {
        top: 40,
        flex: 1,
        flexDirection: 'column',
        
        alignItems: 'center'
    },
    loginTitle: {
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: "normal",
        fontSize: 17,
        fontWeight: 'normal',
        lineHeight: 20,
        color: '#000',
        opacity: 0.4,
    },
    loginForm: {
        flex: 1,
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
        top:20,
        
    },
    textBox: {
        backgroundColor: '#8e8e93',
        opacity: 0.1,
        borderRadius: 25,
        height: 44,
        width: '80%',
        borderWidth: 1,
        color: '#000',
        margin:10,
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: "normal",
        fontSize: 17,
        fontWeight: 'normal',
        lineHeight: 20,
    
    }

});
