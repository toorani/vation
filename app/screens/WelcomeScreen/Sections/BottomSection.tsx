import React from 'react';
import { View } from 'react-native';

import { ViewStyleProp } from '../../../Shared/Props';

import SignWithApple from '../SignComponents/SignWithApple';
import SignWithGoogle from '../SignComponents/SignWithGoogle';
import SignUpWithEmail from '../SignComponents/SignUpWithEmail';
import SignIn from '../SignComponents/SignIn';
import ExploreClasses from './ExploreClasses';

export default function BottomSection({ style }: ViewStyleProp) {

    return (
        <View style={style}>
            <SignWithApple/>
            <SignWithGoogle/>
            <SignUpWithEmail/>
            <SignIn/>
            <ExploreClasses/>
        </View>
    );
}
