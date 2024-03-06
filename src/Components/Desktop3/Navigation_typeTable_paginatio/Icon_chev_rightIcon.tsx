import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_chev_rightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.5 17C10.244 17 9.988 16.902 9.793 16.707C9.402 16.316 9.402 15.684 9.793 15.293L13.098 11.988L9.918 8.695C9.535 8.297 9.546 7.664 9.943 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_chev_rightIcon);
export { Memo as Icon_chev_rightIcon };
