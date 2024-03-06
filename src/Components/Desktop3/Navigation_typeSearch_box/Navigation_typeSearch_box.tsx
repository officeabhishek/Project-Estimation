import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Icon_searchIcon } from './Icon_searchIcon.tsx';
import classes from './Navigation_typeSearch_box.module.css';

interface Props {
  className?: string;
}
/* @figmaId 44:122 */
export const Navigation_typeSearch_box: FC<Props> = memo(function Navigation_typeSearch_box(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon_search}>
        <Icon_searchIcon className={classes.icon} />
      </div>
      <div className={classes.search_placeholder}>Search name, email, or etc.</div>
    </div>
  );
});
