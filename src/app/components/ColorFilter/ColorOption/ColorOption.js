import React from 'react';

import './ColorOption.scss';

type Props = {
  option: {
    name: string;
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
    <input
      id={props.option.name}
      type="checkbox"
      checked={props.checked}
      onChange={(e) => props.onChange(e, props.option)}
    />
    <label htmlFor={props.option.name}>{props.option.longName}</label>
  </div>
);

export default ColorOption;
