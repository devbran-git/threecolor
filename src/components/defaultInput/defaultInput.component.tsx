import React from 'react';
import { Keyboard, TextInput, View } from 'react-native';

import styles from './defaultInput.styles';

import { DefaultInputProps } from './defaultInput.types';

const DefaultInput = ({
  placeholder,
  customContainerStyle,
  ...rest
}: DefaultInputProps) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onSubmitEditing={() => Keyboard.dismiss()}
        {...rest}
      />
    </View>
  );
};

export default DefaultInput;
