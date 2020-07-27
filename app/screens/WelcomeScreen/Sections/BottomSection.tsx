import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import SignWithApple from '../SignComponents/SignWithApple';
import SignWithGoogle from '../SignComponents/SignWithGoogle';
import SignUpWithEmail from '../SignComponents/SignUpWithEmail';
import SignIn from '../SignComponents/SignIn';
import ExploreClasses from './ExploreClasses';

interface IProps {
    style: StyleProp<ViewStyle>,
    googleUserAuthenticated: () => void;
    signUpWithEmailPress: () => void;
}

export default function BottomSection(props: IProps) {
    const { style, googleUserAuthenticated, signUpWithEmailPress } = props;
    return (
        <View style={style}>
            <SignWithApple />
            <SignWithGoogle onUserAuthenticated={googleUserAuthenticated} />
            <SignUpWithEmail onPress={signUpWithEmailPress} />
            <SignIn />
            <ExploreClasses />
        </View>
    );
}
