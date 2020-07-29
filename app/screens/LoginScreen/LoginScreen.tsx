import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { loginWithEmail } from '../../Firebase/firebase';
import { LinearGradient } from 'expo-linear-gradient'
import StyleConfigs from '../../Shared/StyleConfigs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SampleData from '../../DataModels/SampleData';
import CircleBar from '../../Shared/CircleBar';
import LoginForm from './Components/LoginForm';

const LoginScreen = ({ navigation }) => {


    async function onLogin(email: string, password: string) {
        try {
            await loginWithEmail(email.trim(), password);
            navigation.navigate('Home', { data: new SampleData() });

        } catch (error) {
            Alert.alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.sectionTop}
                colors={['#9598a6', '#868895']}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={styles.circlesContainer}>
                    <CircleBar style={styles.circles} count={3} selectedIndex={0} />
                </View>
            </LinearGradient>
            <View style={styles.formContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.welcomeBack}>Welcome back</Text>
                    <Text style={styles.loginTitle}>Login to your account</Text>
                </View>
                <LoginForm onLogin={async (email,password) => onLogin(email,password)} style={{ top: 70 }} />
                <View style={styles.moreActionContainer}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
                        <Text style={styles.signUp}>Sign up</Text>
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
        height: Platform.OS === 'ios' ? '45%' : '20%',
    },
    circlesContainer: {
        alignItems: 'center',
        top: Platform.OS === 'ios' ? '65%' : '25%',
    },
    circles: {
        top: Platform.OS === 'ios' ? '15%' : '8%',
    },
    backButtonContainer: {
        top: Platform.OS === 'ios' ? '15%' : '35%',
        left: '8%',
        width: 50,
    },

    formContainer: {
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        backgroundColor: '#fff',
        height: '100%',
        top: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        top: 40,
    },
    welcomeBack: {
        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: "normal",
        fontSize: 34,
        fontWeight: "900",
        lineHeight: 46,
        color: '#0A1F44'
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

    moreActionContainer: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        top: 120,
    },
    forgotPassword: {
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 20,
        color: '#000'
    },
    signUpContainer: {
        flexDirection: "row",
        marginTop: 25,
    },
    dontHaveAccount: {
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 20,
        color: '#B8BBC6'
    },
    signUp: {
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 20,
        color: '#5bc58b',
        marginLeft: 3,
    }
});
