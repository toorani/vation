//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';

interface IProps {
    count: number,
    selectedIndex: number,
    style?: StyleProp<ViewStyle>
}

// create a component
const CircleBar = ({ count, selectedIndex, style }: IProps) => {

    let circles = [];
    for (let i = 0; i < count; i++) {
        if (i != selectedIndex)
            circles.push(<View key={i} style={styles.circle}></View>)
        else
            circles.push(<View key={i} style={[styles.circle, styles.selected]}></View>)

    }

    return (
        <View style={[styles.container, style]}>
            {circles}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff',
        opacity: 0.5,
    },
    selected: {
        opacity: 1,
    }
});

//make this component available to the app
export default CircleBar;
