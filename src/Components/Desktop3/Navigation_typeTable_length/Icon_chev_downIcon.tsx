import { memo, SVGProps } from 'react';
import React from 'react';

const Icon_chev_downIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.2344 5.8344C4.38442 5.68442 4.58787 5.60017 4.8 5.60017C5.01213 5.60017 5.21558 5.68442 5.3656 5.8344L8 8.4688L10.6344 5.8344C10.7082 5.75799 10.7965 5.69705 10.8941 5.65512C10.9917 5.61319 11.0967 5.59112 11.2029 5.5902C11.3091 5.58928 11.4144 5.60952 11.5128 5.64974C11.6111 5.68997 11.7004 5.74937 11.7755 5.82448C11.8506 5.8996 11.91 5.98892 11.9503 6.08724C11.9905 6.18555 12.0107 6.2909 12.0098 6.39712C12.0089 6.50334 11.9868 6.60832 11.9449 6.70592C11.903 6.80353 11.842 6.8918 11.7656 6.9656L8.5656 10.1656C8.41558 10.3156 8.21213 10.3998 8 10.3998C7.78787 10.3998 7.58442 10.3156 7.4344 10.1656L4.2344 6.9656C4.08442 6.81558 4.00017 6.61213 4.00017 6.4C4.00017 6.18787 4.08442 5.98442 4.2344 5.8344V5.8344Z'
      fill='#333333'
    />
  </svg>
);

const Memo = memo(Icon_chev_downIcon);
export { Memo as Icon_chev_downIcon };
