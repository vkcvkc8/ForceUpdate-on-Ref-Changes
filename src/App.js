import React, { useState, useRef, useEffect, useCallback } from 'react';

function useForceUpdate() {
  const [, setState] = useState(); // Using a dummy state variable to trigger re-renders

  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  return forceUpdate;
}

export default function Counter() {
  const ref = useRef(0);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    // This effect will run whenever ref.current changes.
    console.log(`Effect triggered: ref.current = ${ref.current}`);
  }, [ref.current]); // Adding ref.current to the dependency array

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times`);
    forceUpdate(); // Trigger a re-render
  }

  return (
    <div>
      <button onClick={handleClick}>Click me! {ref.current}</button>
    </div>
  );
}
