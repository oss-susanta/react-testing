import React, {useState} from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="button"
        onClick={() => setCount(c => c + 1)}
      >
        increment
      </button>
      <span>{count}</span>
    </>
  );
}