import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_moreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 5C14 6.104 13.104 7 12 7C10.896 7 10 6.104 10 5C10 3.896 10.896 3 12 3C13.104 3 14 3.896 14 5Z'
      fill='#828282'
    />
    <path
      d='M12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10Z'
      fill='#828282'
    />
    <path
      d='M12 17C10.896 17 10 17.896 10 19C10 20.104 10.896 21 12 21C13.104 21 14 20.104 14 19C14 17.896 13.104 17 12 17Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_moreIcon);
export { Memo as Icon_moreIcon };
