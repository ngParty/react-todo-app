import React, { useState } from 'react';

import './collapsible.css';

const ToggleIcon = (props: { open?: boolean }) => {
  const { open } = props;
  return <span className={`toggle-icon ${open ? 'open' : ''}`}>&gt;</span>;
};

export const Collapsible = (props: {
  className?: string;
  title: React.ReactElement | React.ReactChild;
  children: React.ReactElement;
}) => {
  const { title, children, className } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`collapsible ${className}`}>
      <label
        onPointerDown={() => {
          setOpen((prev) => !prev);
        }}
      >
        <ToggleIcon open={isOpen} />
        {title}
      </label>
      <div className={`collapsible-body ${isOpen ? 'is-open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
