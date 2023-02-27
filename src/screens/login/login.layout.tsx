import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import DefaultInput from '../../components/defaultInput/defaultInput.component';

import logo from '../../assets/images/logo.png';

import styles from './login.styles';

import {LoginProps} from './login.types';
import {isIOS} from '../../styles/global';
import {validateEmail} from '../../utils/validations';

const LoginLayout = ({localState, handlers}: LoginProps) => {
  const {isLoading, email, password} = localState;

  const {setEmail, setPassword, handleSignIn} = handlers;

  const isButtonEnabled = validateEmail(email) && password.length > 5;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIOS ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Image style={styles.logo} source={logo} resizeMode="cover" />
        <DefaultInput
          value={email}
          placeholder="e-mail"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <DefaultInput
          value={password}
          placeholder="senha"
          secureTextEntry
          customContainerStyle={styles.inputSpacing}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={[styles.loginButton, {opacity: isButtonEnabled ? 1 : 0.2}]}
          activeOpacity={isButtonEnabled ? 0.8 : 0.2}
          onPress={isButtonEnabled ? handleSignIn : () => null}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fafafa" />
          ) : (
            <Text style={styles.loginButtonTitle}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginLayout;
