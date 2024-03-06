import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_checkboxIcon } from './Icon_checkboxIcon.tsx';
import classes from './Table_column_TypeSelectorSortB.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon_checkbox?: ReactNode;
  };
}
/* @figmaId 44:187 */
export const Table_column_TypeSelectorSortB: FC<Props> = memo(function Table_column_TypeSelectorSortB(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_checkbox}>
        {props.swap?.icon_checkbox || <Icon_checkboxIcon className={classes.icon} />}
      </div>
    </div>
  );
});
