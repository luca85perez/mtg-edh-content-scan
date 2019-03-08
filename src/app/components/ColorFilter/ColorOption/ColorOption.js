import React from 'react';

import './ColorOption.scss';

const ColorOption = ({ option, onChange }) => (
  <div>
    <label>
      <input type="checkbox" onChange={(e) => onChange(e, option)} />
      <span>{option}</span>
    </label>
  </div>
);

export default ColorOption;
