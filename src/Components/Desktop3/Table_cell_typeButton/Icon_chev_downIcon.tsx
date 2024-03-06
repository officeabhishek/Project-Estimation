import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_chev_downIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 15.5C12.244 15.5 11.988 15.402 11.793 15.207L7.793 11.207C7.402 10.816 7.402 10.184 7.793 9.793C8.184 9.402 8.816 9.402 9.207 9.793L12.512 13.098L15.805 9.918C16.204 9.535 16.835 9.546 17.219 9.943C17.603 10.34 17.592 10.974 17.195 11.357L13.195 15.219C13 15.407 12.75 15.5 12.5 15.5Z'
      fill='#828282'
    />
  </svg>
);

const Memo = memo(Icon_chev_downIcon);
export { Memo as Icon_chev_downIcon };
