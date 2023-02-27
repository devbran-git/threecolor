import React, {useEffect, useState} from 'react';

import MainLayout from './main.layout';

import firestore from '@react-native-firebase/firestore';
import {ObjectsColors} from './main.types';
import {useAuth} from '../../hooks/useAuth';

const MainController = () => {
  const {userData, signOut} = useAuth();

  const [colors, setColors] = useState<ObjectsColors>({} as ObjectsColors);
  const [coneColor, setConeColor] = useState('');
  const [cubeColor, setCubeColor] = useState('');
  const [dodecahedronColor, setDodecahedronColor] = useState('');

  const [isSignOutButtonEnabled, setIsSignOutButtonEnabled] = useState(false);

  const handleSignOut = () => signOut();

  const handleUpdateObjectsColors = () => {
    const isEnabledFunction =
      coneColor.length > 2 ||
      cubeColor.length > 2 ||
      dodecahedronColor.length > 2;

    if (isEnabledFunction)
      firestore()
        .doc(`users/${userData?.uid}`)
        .update({
          objectsColors: {
            cone: coneColor,
            cube: cubeColor,
            dodecahedron: dodecahedronColor,
          },
        })
        .then(() => {
          setConeColor('');
          setCubeColor('');
          setDodecahedronColor('');
        })
        .catch(error => console.log(error));
  };

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

  useEffect(() => {
    // getUserObjectColors();
  }, []);

  return (
    <MainLayout
      localState={{
        colors: {cone: '#F1E700', cube: '#A70610', dodecahedron: '#2FA901'},
        coneColor,
        cubeColor,
        dodecahedronColor,
        isSignOutButtonEnabled,
      }}
      handlers={{
        setIsSignOutButtonEnabled,
        handleUpdateObjectsColors,
        setDodecahedronColor,
        handleSignOut,
        setConeColor,
        setCubeColor,
      }}
    />
  );
};

export default MainController;
