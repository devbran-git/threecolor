export interface MainProps {
  localState: {
    colors: ObjectsColors;
    coneColor: string;
    cubeColor: string;
    dodecahedronColor: string;
    isSignOutButtonEnabled: boolean;
  };
  handlers: {
    setIsSignOutButtonEnabled: (value: boolean) => void;
    setDodecahedronColor: (color: string) => void;
    setConeColor: (color: string) => void;
    setCubeColor: (color: string) => void;
    handleUpdateObjectsColors: () => void;
    handleSignOut: () => void;
  };
}

export interface ObjectsColors {
  cone: string;
  cube: string;
  dodecahedron: string;
}
