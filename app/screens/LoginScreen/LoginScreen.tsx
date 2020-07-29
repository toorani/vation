import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { loginWithEmail } from '../../Firebase/firebase';
import { LinearGradient } from 'expo-linear-gradient'
import StyleConfigs from '../../Shared/StyleConfigs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SampleData from '../../DataModels/SampleData';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function onLogin() {
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
                    <View style={styles.circles}>
                        <View style={styles.circle}></View>
                        <View style={styles.circleGr}></View>
                        <View style={styles.circleGr}></View>

                    </View>
                </View>
            </LinearGradient>

            <View style={styles.formSection}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeBack}>Welcome back</Text>
                    <Text style={styles.loginTitle}>Login to your account</Text>
                    <View style={styles.loginForm}>
                        <View style={styles.textBoxContainer}>
                            <TextInput
                                style={styles.textBox}
                                value={email}
                                placeholder='Email'
                                onChangeText={(text) => { setEmail(text) }} />
                            <TextInput
                                style={styles.textBox}
                                value={password}
                                placeholder='Password'
                                secureTextEntry
                                returnKeyType='go'
                                autoCorrect={false}
                                onChangeText={(text) => { setPassword(text) }} />
                            <TextInput />
                        </View>
                        <View style={{ width: '80%' }}>
                            <Button
                                buttonStyle={styles.loginButton}
                                titleStyle={styles.loginButtonText}
                                title="Login"
                                onPress={async () => onLogin()}
                            />
                        </View>
                        <View style={styles.forgotContainer}>
                            <Text style={styles.forgotPassword}>Forgot your password?</Text>
                        </View>
                        <View style={styles.signUpContainer}>
                            <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
                            <Text style={styles.signUp}>Sign up</Text>
                        </View>


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
    backButtonContainer: {
        top: Platform.OS === 'ios' ? '15%' : '35%',
        left: '8%',
        width:50,
    },
    circles: {
        top: Platform.OS === 'ios' ? '15%' : '8%',

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
    formSection: {
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        backgroundColor: '#fff',
        height: Platform.OS === 'ios' ? '55%' : '80%',
        top: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        top: 20,

    },
    textBox: {
        backgroundColor: '#f1f1f2',
        borderRadius: 25,
        height: 44,
        width: '80%',
        margin: 5,
        fontFamily: StyleConfigs.fonts.Roboto,
        fontStyle: "normal",
        fontSize: 17,
        fontWeight: 'normal',
        lineHeight: 20,
        paddingLeft: 20,
    },
    textBoxContainer: {
        alignItems: 'center',
        width: '100%',
        margin: 10,
    },

    loginButton: {
        backgroundColor: '#6C9DFE',
        borderRadius: 50,
        alignItems: "center"
    },
    loginButtonText: {
        fontFamily: StyleConfigs.fonts.Avenir,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 17,
        lineHeight: 24,
    },
    forgotContainer: {
        marginTop: 35,
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
        marginTop: 35,
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
