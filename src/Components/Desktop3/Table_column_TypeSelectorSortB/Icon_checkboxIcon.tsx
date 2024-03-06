import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_checkboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={6} y={6.5} width={12} height={12} fill='white' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.4878 4.5H5.92683C4.86267 4.5 4 5.39543 4 6.5V18.5C4 19.6046 4.86267 20.5 5.92683 20.5H17.4878C18.552 20.5 19.4146 19.6046 19.4146 18.5V6.5C19.4146 5.39543 18.552 4.5 17.4878 4.5ZM5.92683 18.5V6.5H17.4878V18.5H5.92683Z'
      fill='#BEC8D0'
    />
  </svg>
);

const Memo = memo(Icon_checkboxIcon);
export { Memo as Icon_checkboxIcon };
