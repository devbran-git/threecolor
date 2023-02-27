import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface DefaultInputProps extends TextInputProps {
  placeholder: string;
  customContainerStyle?: StyleProp<ViewStyle>;
}
