import React from 'react';

export const Debug = (props: { children: object }) => {
  return <pre>{JSON.stringify(props.children, null, 2)}</pre>;
};
