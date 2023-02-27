import React, {useEffect, useState} from 'react';

import MainLayout from './main.layout';

import firestore from '@react-native-firebase/firestore';
import {ObjectsColors} from './main.types';
import {useAuth} from '../../hooks/useAuth';

const MainController = () => {
  const {userData, signOut} = useAuth();

  const [colors, setColors] = useState<ObjectsColors>({} as ObjectsColors);

  const getUserObjectColors = () => {
    firestore()
      .doc(`users/${userData?.uid}`)
      .get()
      .then(response => {
        const userObjectsColors = response.data();

        setColors(userObjectsColors?.objectsColors as ObjectsColors);
      })
      .catch(error => console.error(error));
  };

  const handleSignOut = () => signOut();

  useEffect(() => {
    // getUserObjectColors();
  }, []);

  return (
    <MainLayout
      localState={{
        colors: {cone: '#F1E700', cube: '#A70610', dodecahedron: '#2FA901'},
      }}
      handlers={{handleSignOut}}
    />
  );
};

export default MainController;
