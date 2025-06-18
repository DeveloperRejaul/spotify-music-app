import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function ArrowLeft(props: IconTypes) {
  return (
    <Svg
      onPress={props.onPress}
      fill={props.outline || 'none'}
      height={props.size || 24}
      viewBox='0 0 24 24'
      width={props.size || 24}
      {...props}
    >
      <Path
        d='M17 4l-8.33 6.04c-2.226 1.615-2.226 2.306 0 3.92L17 20'
        stroke={props.color || '#141b34'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </Svg>
  );
}
