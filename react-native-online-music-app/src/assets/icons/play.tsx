import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Play(props: IconTypes) {
  return (
    <Svg
      height={props.size || 35}
      width={props.size || 35}
      viewBox='0 0 72 72'
      {...props}
    >
      <Path
        d='M19.582 55.606c.484.178 1.03.297 1.575.297.849 0 1.697-.297 2.425-.772l30-15.98.303-.296c.788-.772 1.212-1.723 1.212-2.792s-.425-2.08-1.212-2.792l-.303-.297-30-16.098c-1.091-.832-2.667-1.01-4-.475-1.516.594-2.485 2.079-2.485 3.683v31.84c0 1.603.97 3.088 2.485 3.682z'
        fill={props.color || 'none'}
        stroke={props.outline || '#000'}
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </Svg>
  );
}
