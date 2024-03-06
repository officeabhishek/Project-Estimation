import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Label_StateInfo } from '../Label_StateInfo/Label_StateInfo.tsx';
import classes from './Table_cell_typeLabel.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    label?: ReactNode;
  };
}
/* @figmaId 44:221 */
export const Table_cell_typeLabel: FC<Props> = memo(function Table_cell_typeLabel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.label || <Label_StateInfo />}
    </div>
  );
});
