import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_checkboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={6} y={6} width={12} height={12} fill='white' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.4878 4H5.92683C4.86267 4 4 4.89543 4 6V18C4 19.1046 4.86267 20 5.92683 20H17.4878C18.552 20 19.4146 19.1046 19.4146 18V6C19.4146 4.89543 18.552 4 17.4878 4ZM5.92683 18V6H17.4878V18H5.92683Z'
      fill='#BEC8D0'
    />
  </svg>
);

const Memo = memo(Icon_checkboxIcon);
export { Memo as Icon_checkboxIcon };
