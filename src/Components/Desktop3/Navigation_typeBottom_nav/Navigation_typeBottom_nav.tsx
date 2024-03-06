import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Navigation_typeTable_paginatio } from '../Navigation_typeTable_paginatio/Navigation_typeTable_paginatio.tsx';
import classes from './Navigation_typeBottom_nav.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 44:151 */
export const Navigation_typeBottom_nav: FC<Props> = memo(function Navigation_typeBottom_nav(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.number_of_entries}>Showing 1 to 10 of 430 entries</div>
      <Navigation_typeTable_paginatio />
    </div>
  );
});
