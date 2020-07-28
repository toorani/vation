//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import StyleConfigs from '../../../Shared/StyleConfigs';
import HomeStyleConfigs from '../HomeStyleConfigs';

// create a component
const Buttons = () => {
    return (
        <View>
            <Button
                buttonStyle={[styles.button, styles.playBuuton]}
                titleStyle={styles.buttonText}
                icon={
                    <Icon
                        name="play-circle"
                        style={styles.icons}
                        size={HomeStyleConfigs.icons.size}
                        color={HomeStyleConfigs.colors.iconColor} />
                }
                title="Play video"
            />
            <Button
                buttonStyle={[styles.button, styles.doneBuuton]}
                titleStyle={styles.buttonText}
                icon={
                    <Icon
                        name="check-circle"
                        style={styles.icons}
                        size={HomeStyleConfigs.icons.size}
                        color={HomeStyleConfigs.colors.iconColor} />
                }
                title="Mark as done"
            />
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        marginLeft: '8%',
        marginRight: '8%',
        height: 48,
        borderRadius: 12,
    },
    doneBuuton: {
        marginBottom: 20,
        backgroundColor: HomeStyleConfigs.colors.buttons.doneBgColor,
    },
    playBuuton: {
        marginBottom: 8,
        backgroundColor: HomeStyleConfigs.colors.buttons.playBgColor,
    },
    buttonText: {
        fontFamily: StyleConfigs.fonts.Inter,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.192,
    },
    icons: {
        marginRight: 5
    },
});

//make this component available to the app
export default Buttons;
