import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import classes from './Table_cell_typeText.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    cell_value?: ReactNode;
  };
}
/* @figmaId 44:219 */
export const Table_cell_typeText: FC<Props> = memo(function Table_cell_typeText(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.cell_value != null ? (
        props.text?.cell_value
      ) : (
        <div className={classes.cell_value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      )}
    </div>
  );
});
