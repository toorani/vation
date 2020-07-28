import React from 'react';
import { Button } from 'react-native-elements';
import SharedStyles from '../ScreenSharedStyles'


export default function SignIn() {
    return (
        <Button
                buttonStyle={SharedStyles.signInButton}
                titleStyle={SharedStyles.signInButtonText}
                title="Log In"
            />
    );
    
}
