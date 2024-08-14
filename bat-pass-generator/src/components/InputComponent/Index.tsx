import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './Style';

interface TextInputProps{
  pass:string
}

export function InputComponent(props: TextInputProps) {
  return (
      <TextInput
      style ={styles.inputer}
      placeholder='PASS'
      multiline={true}
      value = {props.pass}
      />
  );
}