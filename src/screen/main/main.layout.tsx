import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './main.styles';

import {MainProps} from './main.types';

const MainLayout = ({localState, handlers}: MainProps) => {
  const {colors} = localState;
  const {handleSignOut} = handlers;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleSignOut}>
        <Text>MAIN</Text>

        <Text>{colors?.cube}</Text>
        <Text>{colors?.cone}</Text>
        <Text>{colors?.dodecahedron}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainLayout;
