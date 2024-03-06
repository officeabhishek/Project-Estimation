import { memo } from 'react';
import React from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import classes from './Desktop3.module.css';
import { Icon_checkboxIcon } from './Icon_checkboxIcon.tsx';
import { Icon_sortIcon2 } from './Icon_sortIcon2.tsx';
import { Icon_sortIcon3 } from './Icon_sortIcon3.tsx';
import { Icon_sortIcon4 } from './Icon_sortIcon4.tsx';
import { Icon_sortIcon } from './Icon_sortIcon.tsx';
import { Label_StateDanger } from './Label_StateDanger/Label_StateDanger.tsx';
import { Label_StateWarning } from './Label_StateWarning/Label_StateWarning.tsx';
import { Navigation_typeBottom_nav } from './Navigation_typeBottom_nav/Navigation_typeBottom_nav.tsx';
import { Navigation_typeTop_nav } from './Navigation_typeTop_nav/Navigation_typeTop_nav.tsx';
import { Table_body } from './Table_body/Table_body.tsx';
import { Table_column_TypeDefaultSortAs } from './Table_column_TypeDefaultSortAs/Table_column_TypeDefaultSortAs.tsx';
import { Table_column_TypeDefaultSortBl } from './Table_column_TypeDefaultSortBl/Table_column_TypeDefaultSortBl.tsx';
import { Table_column_TypeDefaultSortNo } from './Table_column_TypeDefaultSortNo/Table_column_TypeDefaultSortNo.tsx';
import { Table_column_TypeSelectorSortB } from './Table_column_TypeSelectorSortB/Table_column_TypeSelectorSortB.tsx';

interface Props {
  className?: string;
}
/* @figmaId 44:120 */
const Desktop3: FC<Props> = memo(function Desktop3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.table1}>
        <Navigation_typeTop_nav className={classes.navigation} />
        <div className={classes.frame5}>
          <div className={classes.table_head}>
              <Table_column_TypeSelectorSortB
                className={classes.table_column}
                swap={{
                  icon_checkbox: <Icon_checkboxIcon className={classes.icon} />,
                }}
              />
              <Table_column_TypeDefaultSortAs
                className={classes.table_column2}
                swap={{
                  icon_sort: <Icon_sortIcon className={classes.icon2} />,
                }}
                text={{
                  column_title: <div className={classes.column_title}>Employee ID</div>,
                }}
              />
              <Table_column_TypeDefaultSortAs
                className={classes.table_column3}
                swap={{
                  icon_sort: <Icon_sortIcon2 className={classes.icon3} />,
                }}
                text={{
                  column_title: <div className={classes.column_title2}>Name</div>,
                }}
              />
              <Table_column_TypeDefaultSortNo
                className={classes.table_column4}
                swap={{
                  icon_sort: <Icon_sortIcon3 className={classes.icon4} />,
                }}
                text={{
                  column_title: <div className={classes.column_title3}>Designation</div>,
                }}
              />
              <Table_column_TypeDefaultSortNo
                className={classes.table_column5}
                swap={{
                  icon_sort: <Icon_sortIcon4 className={classes.icon5} />,
                }}
                text={{
                  column_title: <div className={classes.column_title4}>Exp In PWC(Years)</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column6}
                text={{
                  column_title: <div className={classes.column_title5}>Team</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Hours availability in the next 30 days</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Total Skills matched</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Priority Skill 1 Match</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Skill 1 Proficiency</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Priority Skill 2 Match</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Skill 2 Proficiency</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Priority Skill 3 Match</div>,
                }}
              />
              <Table_column_TypeDefaultSortBl
                className={classes.table_column7}
                text={{
                  column_title: <div className={classes.column_title6}>Skill 3 Proficiency</div>,
                }}
              />
            </div>
          <Table_body />
        </div>
        <Navigation_typeBottom_nav className={classes.navigation2} />
      </div>
    </div>
  );
});

export default Desktop3;
