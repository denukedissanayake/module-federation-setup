import React, { useState } from 'react';

export const Counter = ({isAdmin}) => {

const [count, setCount] = useState(0);
const [adminCount, setAdminCount] = useState(0);

  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "pink",
      }}
    >
      <h2 onClick={() => setCount(count+1)}>Click me : {count}</h2>
      {isAdmin && <h2 onClick={() => setAdminCount(adminCount+1)}>Admin Click me : {adminCount}</h2>}
    </div>
  );
};