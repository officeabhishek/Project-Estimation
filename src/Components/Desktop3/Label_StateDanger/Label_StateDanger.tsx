import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';


import resets from '../../_resets.module.css';
import classes from './Label_StateDanger.module.css';

interface Props {
  className?: string;
  text?: {
    label_value?: ReactNode;
  };
}
/* @figmaId 44:212 */
export const Label_StateDanger: FC<Props> = memo(function Label_StateDanger(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.label_value != null ? props.text?.label_value : <div className={classes.label_value}>Label</div>}
    </div>
  );
});
