import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_chev_downIcon } from './Icon_chev_downIcon.tsx';
import classes from './Navigation_typeTable_length.module.css';

interface Props {
  className?: string;
}
/* @figmaId 44:126 */
export const Navigation_typeTable_length: FC<Props> = memo(function Navigation_typeTable_length(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Show</div>
      <div className={classes.number_picker}>
        <div className={classes.entries_number}>10</div>
        <div className={classes.icon_chev_down}>
          <Icon_chev_downIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.text2}>entries</div>
    </div>
  );
});
