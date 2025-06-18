import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Minus(props: IconTypes) {
  return (
    <Svg
      width={props.size || 30}
      height={props.size || 30}
      viewBox='0 0 24 24'
      fill={props.color || 'none'}
      stroke={props.outline || 'currentColor'}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d='M8 12L16 12' />
    </Svg>
  );
}

