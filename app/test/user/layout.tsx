import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const TestLayout:React.FC<Props> = (props) => {
  return (
    <main>
      <h1>This is Layout</h1>
      {props.children}
    </main>
  );
};

export default TestLayout;