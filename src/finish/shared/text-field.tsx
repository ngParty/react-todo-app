import React from 'react';

import './text-field.css';

export const TextField = (props: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}) => {
  const { className, ...inputProps } = props;
  return <input type="text" className={`input ${className}`} {...inputProps} />;
};
