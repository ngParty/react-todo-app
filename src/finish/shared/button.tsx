import React from 'react';

import './button.css';

export const Button = (props: {
  onClick: React.MouseEventHandler;
  children: React.ReactElement | React.ReactChild;
}) => {
  const { onClick, children } = props;
  return (
    <button className="btn" onPointerDown={onClick}>
      {children}
    </button>
  );
};
