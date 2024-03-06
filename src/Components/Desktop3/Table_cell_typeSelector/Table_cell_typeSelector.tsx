import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_checkboxIcon } from './Icon_checkboxIcon.tsx';
import classes from './Table_cell_typeSelector.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 44:223 */
export const Table_cell_typeSelector: FC<Props> = memo(function Table_cell_typeSelector(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_checkbox}>
        <Icon_checkboxIcon className={classes.icon} />
      </div>
    </div>
  );
});
