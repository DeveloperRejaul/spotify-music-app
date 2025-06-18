import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Pause(props: IconTypes) {
  return (
    <Svg
      height={ props.size || 32}
      viewBox='0 0 32 32'
      width={ props.size || 32}
      {...props}
      fill={props.color}
    >
      <Path d='M12 6h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2zM22 6h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2z' />
      <Path d='M0 0h32v32H0z' fill='none' />
    </Svg>
  );
}

