import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import StyleConfigs from './StyleConfigs'
import HeaderSection from './Sections/HeaderSection';
import MiddleSection from './Sections/MiddleSection';
import BottomSection from './Sections/BottomSection';


export default function WelcomeScreen() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[StyleConfigs.colors.screenGradient.start, StyleConfigs.colors.screenGradient.end]}>
      <HeaderSection style={styles.headerView} />
      <MiddleSection style={styles.middleView} />
      <BottomSection style={styles.bottomView} />
    </LinearGradient>
  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: StyleConfigs.colors.screenBgColor,
  },
  headerView: {
    flex: 3
  },
  middleView: {
    flex: 1
  },
  bottomView: {
    flex: 3
  },
  
});
