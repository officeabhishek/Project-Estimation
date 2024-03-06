import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_chev_downIcon } from './Icon_chev_downIcon.tsx';
import { Icon_moreIcon } from './Icon_moreIcon.tsx';
import classes from './Table_cell_typeButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon_more?: ReactNode;
    icon_chev_down?: ReactNode;
  };
}
/* @figmaId 44:231 */
export const Table_cell_typeButton: FC<Props> = memo(function Table_cell_typeButton(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon_more}>{props.swap?.icon_more || <Icon_moreIcon className={classes.icon} />}</div>
      <div className={classes.icon_chev_down}>
        {props.swap?.icon_chev_down || <Icon_chev_downIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
