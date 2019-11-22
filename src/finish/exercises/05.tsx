import React from 'react';

export const Greeter = (props: { greet: string; who: string }) => {
  const { greet, who } = props;

  return (
    <div className="container">
      <h1>
        {greet} {who}
      </h1>
    </div>
  );
};
