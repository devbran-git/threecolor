import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultInput from '../../components/defaultInput/defaultInput.component';

import logo from '../../assets/images/logo.png';

import styles from './login.styles';

import {LoginProps} from './login.types';
import {isIOS} from '../../styles/global';

const LoginLayout = ({localState, handlers}: LoginProps) => {
  const {} = localState;

  const {} = handlers;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIOS ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Image style={styles.logo} source={logo} resizeMode="cover" />
        <DefaultInput placeholder="e-mail" keyboardType="email-address" />

        <DefaultInput
          placeholder="senha"
          secureTextEntry
          customContainerStyle={styles.inputSpacing}
        />

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
          <Text style={styles.loginButtonTitle}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginLayout;
