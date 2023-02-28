import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
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
      <View style={styles.mainContent}>
        <WebView
          style={styles.webView}
          originWhitelist={['*']}
          source={{
            html: `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>Threecolor</title>
              <style>
                body {
                  margin: 0;
                }
              </style>
            </head>
            <body>
              <script type="module">
                import * as THREE from "https://unpkg.com/three/build/three.module.js";
          
                // Set up the camera
                const camera = new THREE.PerspectiveCamera(
                  75,
                  window.innerWidth / window.innerHeight,
                  0.1,
                  1000
                );
                camera.position.z = 5;
          
                // Set up the renderer
                const renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(renderer.domElement);
          
                // Set up the scene
                const scene = new THREE.Scene();
                scene.background = new THREE.Color(0x232323);
          
                // Create the cube geometry
                const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
          
                // Create the cone geometry
                const coneGeometry = new THREE.ConeGeometry(0.75, 1.2, 32);
          
                // Create the dodecahedron geometry
                const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.8);
          
                // Create the materials
                const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xa70610 });
                const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xf1e700 });
                const dodecahedronMaterial = new THREE.MeshBasicMaterial({
                  color: 0x2fa901,
                });
          
                // Create the meshes
                const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
          
                const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
                coneMesh.rotation.x = Math.PI / 2;
          
                const dodecahedronMesh = new THREE.Mesh(
                  dodecahedronGeometry,
                  dodecahedronMaterial
                );
          
                // Position the meshes vertically
                cubeMesh.position.y = 2.5;
                coneMesh.position.y = 0;
                dodecahedronMesh.position.y = -2.5;
          
                // Add the meshes to the scene
                scene.add(cubeMesh);
                scene.add(coneMesh);
                scene.add(dodecahedronMesh);
          
                // Animate the scene
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
          </html>`,
          }}
        />
      </View>
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
