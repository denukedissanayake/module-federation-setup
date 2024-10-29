import React, { useState } from 'react';

export const Counter = () => {

const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "pink",
      }}
    >
      <h2 onClick={() => setCount(count+1)}>Click me : {count}</h2>
    </div>
  );
};