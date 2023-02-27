import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import DefaultInput from '../../components/defaultInput/defaultInput.component';

import styles from './main.styles';

import {MainProps} from './main.types';

const MainLayout = ({localState, handlers}: MainProps) => {
  const {colors} = localState;
  const {handleSignOut} = handlers;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}></View>
      <View style={styles.controls}>
        <View style={styles.inputs}>
          <DefaultInput
            placeholder="Cor do Cubo"
            customContainerStyle={styles.customInput}
          />
          <DefaultInput
            placeholder="Cor do Cone"
            customContainerStyle={styles.customInput}
          />
          <DefaultInput
            placeholder="Cor do Dodecaedron"
            customContainerStyle={styles.customInput}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
          <Text style={styles.submitButtonTitle}>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
