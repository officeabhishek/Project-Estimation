import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Navigation_typeSearch_box } from '../Navigation_typeSearch_box/Navigation_typeSearch_box.tsx';
import { Navigation_typeTable_length } from '../Navigation_typeTable_length/Navigation_typeTable_length.tsx';
import classes from './Navigation_typeTop_nav.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 44:154 */
export const Navigation_typeTop_nav: FC<Props> = memo(function Navigation_typeTop_nav(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Navigation_typeTable_length />
      <Navigation_typeSearch_box />
    </div>
  );
});
