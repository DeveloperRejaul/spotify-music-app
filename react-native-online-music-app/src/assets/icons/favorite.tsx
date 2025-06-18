import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Favorite(props: IconTypes) {
  return (
    <Svg
      onPress={props.onPress}
      fill='none'
      height={props.size || 24}
      viewBox='0 0 24 24'
      width={props.size || 24}
      {...props}
    >
      <Path
        d='M19.463 3.994c-2.682-1.645-5.023-.982-6.429.074-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.012 7.219 2.349 4.537 3.994 1.018 6.153.222 13.274 8.34 19.284 9.886 20.427 10.659 21 12 21s2.114-.572 3.66-1.717c8.118-6.008 7.322-13.13 3.803-15.289z'
        stroke={props.color || '#2a353d'}
        strokeLinecap='round'
        strokeWidth={1.5}
        fill={props.outline}
      />
    </Svg>
  );
}