import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function App(): JSX.Element {
  const [objectColor, setObjectColor] = useState('');
  const [objectStyleColor, setObjectStyleColor] = useState('#222');

  const handleSendColor = () => {
    firestore()
      .collection('stats')
      .doc('nMgW7UkryWZwfsJqk4ej')
      .update({color: objectColor.trim()})
      .then(() => {
        setObjectStyleColor(objectColor.trim());
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    firestore()
      .collection('stats')
      .doc('nMgW7UkryWZwfsJqk4ej')
      .get()
      .then(response => {
        const userColor = response.data();

        setObjectColor(userColor!.color);
        setObjectStyleColor(userColor!.color);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="digite uma cor"
        onChangeText={setObjectColor}
        autoCapitalize="none"
      />
      <Text style={{color: objectStyleColor}}>
        {objectStyleColor !== '#222' ? objectStyleColor : ''}
      </Text>
      <TouchableOpacity onPress={handleSendColor}>
        <Text style={styles.activeText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
  },
});

export default App;
