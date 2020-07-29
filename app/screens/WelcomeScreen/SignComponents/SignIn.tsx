import React from 'react';
import { Button } from 'react-native-elements';
import SharedStyles from '../ScreenSharedStyles'

interface IProps {
    onPress: () => void;
}
export default function SignIn({ onPress }: IProps) {
    return (
        <Button
            buttonStyle={SharedStyles.signInButton}
            titleStyle={SharedStyles.signInButtonText}
            title="Log In"
            onPress={onPress}
        />
    );

}
