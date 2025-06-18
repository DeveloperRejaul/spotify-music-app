import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Next(props: IconTypes) {
  return (
    <Svg
      height={props.size || 30}
      viewBox='0 0 24 24'
      width={props.size || 30}
      {...props}
      fill={props.color}
    >
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M6 18l8.5-6L6 6zM16 6v12h2V6z' />
    </Svg>
  );
}

