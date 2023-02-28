import React, { useEffect, useMemo, useState } from 'react';
import MainLayout from './main.layout';

import firestore from '@react-native-firebase/firestore';
import { ObjectsColors } from './main.types';
import { useAuth } from '../../hooks/useAuth';

const MainController = () => {
  const { userData, signOut } = useAuth();

  const [colors, setColors] = useState<ObjectsColors>({} as ObjectsColors);
  const [coneColor, setConeColor] = useState('');
  const [cubeColor, setCubeColor] = useState('');
  const [dodecahedronColor, setDodecahedronColor] = useState('');
  const [displayedHTML, setDisplayedHTML] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignOutButtonEnabled, setIsSignOutButtonEnabled] = useState(false);

  const handleSignOut = () => signOut();

  const isEnabledUpdateButton =
    coneColor.length > 2 ||
    cubeColor.length > 2 ||
    dodecahedronColor.length > 2;

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
        setConeColor('');
        setCubeColor('');
        setDodecahedronColor('');
        setIsLoading(false);
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

  const generatedHTML = useMemo(() => {
    const baseHTML = `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        background-color: #232323;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import * as THREE from 'https://unpkg.com/three/build/three.module.js';

      let cube = 'blue';

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      document.body.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      camera.position.z = 4;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x232323);

      const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);

      const coneGeometry = new THREE.ConeGeometry(0.7, 1, 32);

      const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.7);

      const cubeMaterial = new THREE.MeshStandardMaterial({ color: "${colors.cube}" });
      const coneMaterial = new THREE.MeshStandardMaterial({ color: "${colors.cone}" });
      const dodecahedronMaterial = new THREE.MeshStandardMaterial({
        color: "${colors.dodecahedron}",
      });

      const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

      const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
      coneMesh.rotation.x = Math.PI / 2;

      const dodecahedronMesh = new THREE.Mesh(
        dodecahedronGeometry,
        dodecahedronMaterial,
      );

      cubeMesh.castShadow = true;
      coneMesh.castShadow = true;
      dodecahedronMesh.castShadow = true;

      cubeMesh.position.y = 2;
      coneMesh.position.y = 0;
      dodecahedronMesh.position.y = -2;

      scene.add(cubeMesh);
      scene.add(coneMesh);
      scene.add(dodecahedronMesh);

      const light = new THREE.HemisphereLight(0xffffff, 0x232323, 1);
      light.position.set(0, 1, 0);
      scene.add(light);

      function animate() {
        requestAnimationFrame(animate);
        cubeMesh.rotation.x += 0.01;
        cubeMesh.rotation.y += 0.01;
        coneMesh.rotation.x += 0.01;
        coneMesh.rotation.z += 0.01;
        dodecahedronMesh.rotation.x += 0.01;
        dodecahedronMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      animate();
    </script>
  </body>
</html>
`;

    return baseHTML;
  }, [colors]);

  useEffect(() => {
    getUserObjectColors();
  }, []);

  useEffect(() => {
    setDisplayedHTML(generatedHTML);
  }, [colors]);

  return (
    <MainLayout
      localState={{
        isLoading,
        coneColor,
        cubeColor,
        displayedHTML,
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
