import React, { useState } from 'react';

export function App() {
  const [count, setCount] = useState(() => {
    console.log('Run function to set initial value only the first time');
    return 0;
  });

  // setCount can take a function that updates the count in relation to the previous count
  function decrementCount() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // console.log(count.json());

  return (
    <>
      <button onClick={decrementCount}>-</button>
      {/* <span>0</span> */}
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
