import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_chev_leftIcon } from './Icon_chev_leftIcon.tsx';
import { Icon_chev_rightIcon } from './Icon_chev_rightIcon.tsx';
import classes from './Navigation_typeTable_paginatio.module.css';

interface Props {
  className?: string;
}
/* @figmaId 44:133 */
export const Navigation_typeTable_paginatio: FC<Props> = memo(function Navigation_typeTable_paginatio(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.prev}>
        <div className={classes.icon_chev_left}>
          <Icon_chev_leftIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.page_active}>
        <div className={classes._1}>1</div>
      </div>
      <div className={classes.page_number}>
        <div className={classes._2}>2</div>
      </div>
      <div className={classes.page_number2}>
        <div className={classes._3}>3</div>
      </div>
      <div className={classes.page_number3}>
        <div className={classes._4}>...</div>
      </div>
      <div className={classes.page_number4}>
        <div className={classes._42}>1337</div>
      </div>
      <div className={classes.next}>
        <div className={classes.icon_chev_right}>
          <Icon_chev_rightIcon className={classes.icon2} />
        </div>
      </div>
    </div>
  );
});
