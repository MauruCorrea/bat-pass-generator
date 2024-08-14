import React, {useState} from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './Style';
import { InputComponent } from '../InputComponent/Index';

import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function ButtonComponent() {
  const [pass, setPass] = useState('')
  
  const handleGenerateButton = () =>  {
    let generateToken  = generatePass()
    setPass(generateToken)
  }
  const handleCopyButton = async () =>{
   await Clipboard.setStringAsync(pass)
  }

  
  return (
    <>

      <InputComponent pass={pass} />
      
      <Pressable
        style= {({ pressed }) => pressed ? styles.buttonPressed : styles.buttonDefault}
        
        onPress={()=>{handleGenerateButton()}}      >
        <Text style={styles.text}>GENERATE</Text>
          
      </Pressable>

      <Pressable
         style= {({ pressed }) => pressed ? styles.buttonPressed : styles.buttonDefault}
        onPress={()=>{handleCopyButton()}}      >
        <Text style={styles.text}>🦇COPY🦇</Text>
      </Pressable>

    </>
  );
}