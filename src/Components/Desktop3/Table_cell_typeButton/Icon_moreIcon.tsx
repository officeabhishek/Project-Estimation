import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_moreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.5 5C14.5 6.104 13.604 7 12.5 7C11.396 7 10.5 6.104 10.5 5C10.5 3.896 11.396 3 12.5 3C13.604 3 14.5 3.896 14.5 5Z'
      fill='#828282'
    />
    <path
      d='M12.5 10C11.396 10 10.5 10.896 10.5 12C10.5 13.104 11.396 14 12.5 14C13.604 14 14.5 13.104 14.5 12C14.5 10.896 13.604 10 12.5 10Z'
      fill='#828282'
    />
    <path
      d='M12.5 17C11.396 17 10.5 17.896 10.5 19C10.5 20.104 11.396 21 12.5 21C13.604 21 14.5 20.104 14.5 19C14.5 17.896 13.604 17 12.5 17Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_moreIcon);
export { Memo as Icon_moreIcon };