import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_sortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.4096 20.9148C12.2106 21.1992 11.7894 21.1992 11.5904 20.9148L7.30071 14.7867C7.06874 14.4553 7.30582 14 7.71033 14H16.2897C16.6942 14 16.9313 14.4553 16.6993 14.7867L12.4096 20.9148Z'
      fill='#D8D3D3'
    />
    <path
      d='M12.4096 4.08517C12.2106 3.80081 11.7894 3.80081 11.5904 4.08517L7.30071 10.2133C7.06874 10.5447 7.30582 11 7.71033 11H16.2897C16.6942 11 16.9313 10.5447 16.6993 10.2133L12.4096 4.08517Z'
      fill='#333333'
    />
  </svg>
);

const Memo = memo(Icon_sortIcon);
export { Memo as Icon_sortIcon };
