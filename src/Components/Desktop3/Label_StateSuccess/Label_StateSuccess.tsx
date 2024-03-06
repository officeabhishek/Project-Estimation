import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import classes from './Label_StateSuccess.module.css';

interface Props {
  className?: string;
  text?: {
    label_value?: ReactNode;
  };
}
/* @figmaId 44:210 */
export const Label_StateSuccess: FC<Props> = memo(function Label_StateSuccess(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.label_value != null ? props.text?.label_value : <div className={classes.label_value}>Label</div>}
    </div>
  );
});
