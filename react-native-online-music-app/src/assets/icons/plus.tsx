import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Plus(props: IconTypes) {
  return (
    <Svg
      height={props.size || 30}
      width={props.size || 30}
      viewBox='0 0 1024 1063.18'
      {...props}
      fill={props.color}
      stroke={props.outline}
    >
      <Path d='M512 21.333c282.77 0 512 229.23 512 512s-229.23 512-512 512-512-229.23-512-512 229.23-512 512-512zm0 934.957c233.592 0 422.957-189.364 422.957-422.957S745.593 110.376 512 110.376c-233.592 0-422.957 189.364-422.957 422.957.278 233.48 189.476 422.678 422.93 422.956h.026zm255.11-378.435H256.89v-89.043h510.22zM556.522 788.443H467.48v-510.22h89.042z' />
    </Svg>
  );
}
