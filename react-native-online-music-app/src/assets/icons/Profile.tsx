
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconTypes } from './types';

export default function Profile(props: IconTypes) {
  return (
    <Svg
      width={ props.size || '26'}
      height={ props.size || '26'}
      viewBox='0 0 20 20'
      {...props}
    >
      <Path
        d='M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364'
        transform='translate(-140 -2159) translate(56 160)'
        fill={props.color || '#000'}
        stroke='none'
        strokeWidth={1}
        fillRule='evenodd'
      />
    </Svg>
  );
}
