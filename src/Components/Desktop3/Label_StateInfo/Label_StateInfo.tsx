import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import classes from './Label_StateInfo.module.css';

interface Props {
  className?: string;
}
/* @figmaId 44:208 */
export const Label_StateInfo: FC<Props> = memo(function Label_StateInfo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.label_value}>Label</div>
    </div>
  );
});
