export interface MainProps {
  localState: {
    coneColor: string;
    cubeColor: string;
    isLoading: boolean;
    generatedHTML: string;
    dodecahedronColor: string;
    isEnabledUpdateButton: boolean;
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
