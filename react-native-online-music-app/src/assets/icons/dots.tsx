import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Dots(props: IconTypes) {
  return (
    <Svg
      viewBox='0 0 20 20'
      {...props}
      fill={props.color}
      stroke={props.color}
      width={props.size || 30}
      height={props.size || 30}
    >
      <Path
        d='M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm0-2.6A2.2 2.2 0 109.999.8a2.2 2.2 0 00.002 4.4zm0 9.6a2.2 2.2 0 100 4.402 2.2 2.2 0 000-4.402z'
      />
    </Svg>
  );
}


