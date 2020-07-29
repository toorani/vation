//import liraries
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import StyleConfigs from '../../../Shared/StyleConfigs';

interface IProps {
    onLogin: (email: string, password: string) => void,
    style?: StyleProp<ViewStyle>
}

// create a component
const LoginForm = ({ onLogin, style }: IProps) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <View style={[styles.container, style]}>
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
                    onPress={async () => onLogin(email,password)}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBoxContainer: {
        alignItems: 'center',
        width: '100%',
        margin: 10,
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
});

//make this component available to the app
export default LoginForm;
