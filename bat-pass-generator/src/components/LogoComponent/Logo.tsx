import React from 'react';
import { View, Image, Text } from 'react-native';
import  logo from '../../../assets/bat-logo.png'
import { styles } from './Style';

export function Logo() {
  return (
    <View >
      <Text style ={styles.title}>
        BAT PASS GENERATOR
      </Text>
      <Image
        source={logo}
        style={styles.logo}
      />
    </View>
  );
}