import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_chev_downIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.293 11.207C6.902 10.816 6.902 10.184 7.293 9.793C7.684 9.402 8.316 9.402 8.707 9.793L12.012 13.098L15.305 9.918C15.704 9.535 16.335 9.546 16.719 9.943C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_chev_downIcon);
export { Memo as Icon_chev_downIcon };
