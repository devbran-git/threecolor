import React, { useEffect, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { useAuth } from '../../hooks/useAuth';

import MainLayout from './main.layout';

import { htmlGenerator } from '../../utils/htmlGenerator';

import { ObjectsColors } from './main.types';

const MainController = () => {
  const { userData, signOut } = useAuth();

  const [coneColor, setConeColor] = useState('');
  const [cubeColor, setCubeColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dodecahedronColor, setDodecahedronColor] = useState('');
  const [colors, setColors] = useState<ObjectsColors>({} as ObjectsColors);
  const [isSignOutButtonEnabled, setIsSignOutButtonEnabled] = useState(false);

  const isEnabledUpdateButton =
    coneColor.length > 2 ||
    cubeColor.length > 2 ||
    dodecahedronColor.length > 2;

  const generatedHTML = useMemo(() => {
    return htmlGenerator(colors);
  }, [colors]);

  const handleSignOut = () => signOut();

  const handleUpdateObjectsColors = () => {
    setIsLoading(true);
    firestore()
      .doc(`users/${userData?.uid}`)
      .update({
        objectsColors: {
          cone: coneColor ? coneColor : colors.cone,
          cube: cubeColor ? cubeColor : colors.cube,
          dodecahedron: dodecahedronColor
            ? dodecahedronColor
            : colors.dodecahedron,
        },
      })
      .then(() => {
        Keyboard.dismiss();
        setConeColor('');
        setCubeColor('');
        setDodecahedronColor('');
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const userColors = firestore()
      .collection('users')
      .doc(userData?.uid)
      .onSnapshot(documentSnapshot => {
        const userObjectsColors = documentSnapshot.data();

        console.log(userObjectsColors);

        setColors(userObjectsColors?.objectsColors);
      });

    return () => userColors();
  }, [userData]);

  return (
    <MainLayout
      localState={{
        isLoading,
        coneColor,
        cubeColor,
        generatedHTML,
        dodecahedronColor,
        isEnabledUpdateButton,
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
