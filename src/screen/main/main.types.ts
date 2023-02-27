export interface MainProps {
  localState: {
    colors: ObjectsColors;
  };
  handlers: {
    handleSignOut: () => void;
  };
}

export interface ObjectsColors {
  cone: string;
  cube: string;
  dodecahedron: string;
}
