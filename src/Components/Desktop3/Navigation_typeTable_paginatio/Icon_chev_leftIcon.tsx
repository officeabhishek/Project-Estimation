import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_chev_leftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.3623 17C13.1003 17 12.8393 16.898 12.6433 16.695L8.7803 12.695C8.4023 12.302 8.4073 11.679 8.7933 11.293L12.7933 7.293C13.1833 6.902 13.8163 6.902 14.2073 7.293C14.5973 7.684 14.5973 8.316 14.2073 8.707L10.9023 12.012L14.0813 15.305C14.4653 15.703 14.4543 16.336 14.0573 16.719C13.8623 16.907 13.6123 17 13.3623 17Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_chev_leftIcon);
export { Memo as Icon_chev_leftIcon };
