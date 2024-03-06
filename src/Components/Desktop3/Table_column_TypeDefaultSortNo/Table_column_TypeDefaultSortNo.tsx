import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_sortIcon } from './Icon_sortIcon.tsx';
import classes from './Table_column_TypeDefaultSortNo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon_sort?: ReactNode;
  };
  text?: {
    column_title?: ReactNode;
  };
}
/* @figmaId 44:167 */
export const Table_column_TypeDefaultSortNo: FC<Props> = memo(function Table_column_TypeDefaultSortNo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.column_title != null ? (
        props.text?.column_title
      ) : (
        <div className={classes.column_title}>Column 1</div>
      )}
      <div className={classes.icon_sort}>{props.swap?.icon_sort || <Icon_sortIcon className={classes.icon} />}</div>
    </div>
  );
});
