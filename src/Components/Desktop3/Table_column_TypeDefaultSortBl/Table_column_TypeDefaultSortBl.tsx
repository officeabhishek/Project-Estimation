import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import classes from './Table_column_TypeDefaultSortBl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    column_title?: ReactNode;
  };
}
/* @figmaId 44:158 */
export const Table_column_TypeDefaultSortBl: FC<Props> = memo(function Table_column_TypeDefaultSortBl(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.column_title != null ? (
        props.text?.column_title
      ) : (
        <div className={classes.column_title}>Column 1</div>
      )}
    </div>
  );
});
