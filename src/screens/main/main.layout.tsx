import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultInput from '../../components/defaultInput/defaultInput.component';

import styles from './main.styles';

import {MainProps} from './main.types';

const MainLayout = ({localState, handlers}: MainProps) => {
  const {
    colors,
    coneColor,
    cubeColor,
    dodecahedronColor,
    isSignOutButtonEnabled,
  } = localState;
  const {
    setIsSignOutButtonEnabled,
    handleUpdateObjectsColors,
    setDodecahedronColor,
    handleSignOut,
    setConeColor,
    setCubeColor,
  } = handlers;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topBar}>
        {isSignOutButtonEnabled ? (
          <TouchableOpacity
            style={styles.topBarButton}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            activeOpacity={0.8}
            onPress={() => setIsSignOutButtonEnabled(false)}>
            <Text style={[styles.topBarButtonTitle, {lineHeight: 16}]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}

        {isSignOutButtonEnabled ? (
          <TouchableOpacity
            style={styles.topBarOptionButton}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            activeOpacity={0.8}
            onPress={handleSignOut}>
            <Text style={[styles.topBarButtonTitle, {lineHeight: 16}]}>
              Sair
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.topBarOptionButton}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            activeOpacity={0.8}
            onPress={() => setIsSignOutButtonEnabled(true)}>
            <Text style={styles.topBarButtonTitle}>...</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.mainContent}></View>
      <View style={styles.controls}>
        <View style={styles.inputs}>
          <DefaultInput
            value={cubeColor}
            placeholder="Cor do Cubo"
            customContainerStyle={styles.customInput}
            onChangeText={setCubeColor}
          />

          <DefaultInput
            value={coneColor}
            placeholder="Cor do Cone"
            customContainerStyle={styles.customInput}
            onChangeText={setConeColor}
          />

          <DefaultInput
            value={dodecahedronColor}
            placeholder="Cor do Dodecaedron"
            customContainerStyle={styles.customInput}
            onChangeText={setDodecahedronColor}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={handleUpdateObjectsColors}>
          <Text style={styles.submitButtonTitle}>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
