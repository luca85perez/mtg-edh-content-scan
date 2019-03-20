import React from 'react';

import './ColorOption.scss';

type Props = {
  option: {
    longName: string;
  };
  checked: boolean;
  onChange: Function;
};

/**
 *
 * @param {*} props
 */
const ColorOption = (props: Props) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange(e, props.option)}
      />
      <span>{props.option.longName}</span>
    </label>
  </div>
);

export default ColorOption;
