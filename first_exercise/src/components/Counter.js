import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  // function Counter(props) {};
  // const start = props;
  // const [count, setCount] = useState(parseInt(start));

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;