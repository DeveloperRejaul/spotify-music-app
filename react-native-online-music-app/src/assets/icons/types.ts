import { ViewStyle } from 'react-native';

export interface IconTypes {
  height?: number;
  width?: number;
  color?: string;
  outline?: string;
  size?: number;
  onPress?: () => void;
  className?: string;
  style?: ViewStyle
}
