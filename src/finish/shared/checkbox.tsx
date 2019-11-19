import React from 'react';

import './checkbox.css';

export const CheckBox = (props: {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactElement | React.ReactChild;
}) => {
  const { checked, children, onChange } = props;

  return (
    <label className="paper-check">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
};
