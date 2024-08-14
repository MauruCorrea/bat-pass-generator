import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from './Style';
import { Logo } from '../../components/LogoComponent/Logo';
import { InputComponent } from '../../components/InputComponent/Index';
import { ButtonComponent } from '../../components/ButtonComponent/Index';
import { StatusBar } from 'expo-status-bar';

export function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <Logo/>
      </View>

      <View style={styles.inputContainer}>
        <ButtonComponent/>
      </View>      
      
      <StatusBar style="light"/>
    </View>
  );
}