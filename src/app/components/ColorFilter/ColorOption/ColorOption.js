import React from 'react';

import './ColorOption.scss';

const ColorOption = ({ option, checked, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e, option)}
      />
      <span>{option.longName}</span>
    </label>
  </div>
);

export default ColorOption;
