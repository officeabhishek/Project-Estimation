import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import React from 'react';

import resets from '../../_resets.module.css';
import { Label_StateSuccess } from '../Label_StateSuccess/Label_StateSuccess.tsx';
import { Table_cell_typeButton } from '../Table_cell_typeButton/Table_cell_typeButton.tsx';
import { Table_cell_typeLabel } from '../Table_cell_typeLabel/Table_cell_typeLabel.tsx';
import { Table_cell_typeSelector } from '../Table_cell_typeSelector/Table_cell_typeSelector.tsx';
import { Table_cell_typeText } from '../Table_cell_typeText/Table_cell_typeText.tsx';
import { Icon_chev_downIcon } from './Icon_chev_downIcon.tsx';
import { Icon_moreIcon } from './Icon_moreIcon.tsx';
import classes from './Table_body.module.css';

interface Props {
  className?: string;
  swap?: {
    label?: ReactNode;
  };
  text?: {
    cell_value?: ReactNode;
    cell_value2?: ReactNode;
  };
}
/* @figmaId 44:200 */
export const Table_body: FC<Props> = memo(function Table_body(props = {}) {
  return (
    <>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell}/>
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Table_cell_typeSelector className={classes.table_cell} />
        <Table_cell_typeText
          className={classes.table_cell2}
          text={{
            cell_value: props.text?.cell_value || (
              <div className={classes.cell_value}>
                <div className={classes.textBlock}>101090376</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Smita Kajur Agarwal</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Senior Associate 2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2.7 Years</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>CS & C</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>73</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>3</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>Yes</div>
              </div>
            ),
          }}
        />
        <Table_cell_typeText
          className={classes.table_cell3}
          text={{
            cell_value: (
              <div className={classes.cell_value2}>
                <div className={classes.textBlock2}>2</div>
              </div>
            ),
          }}
        />
      </div>
      
    

    </>
    
  );
});
