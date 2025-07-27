// React hook is a modern approach to have a state inside functional components.
import { useState } from "react";

export const HookUseState = () => {
  // useState returns an array with 2 elements
  // 1. the first element is the value
  // 2. the second element is the function that changes the value
  // we cannot use useState inside loops, conditions o functions, always in this level of the component
  const [counter, setCounter] = useState(0);
  /**
   * we possible think that handleCounterDuplicated should change the state to (2).
   * but the output if this is: 1
   * because the state (counter) changes when the render is generated
   */
  const handleCounterDuplicated = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  /**
   * To mitigate this error we can use the previousValue param of the setState
   * it changes before the render so it works!
   */
  const handleCounterDuplicatedCorrect = () => {
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    console.log("asd");
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  /**
   * We can pass a function into the defaultValue from useState
   * this function just runs in the mounting of the component
   */
  const [data, setData] = useState(() => {
    const dataLS = localStorage.getItem("data");
    return JSON.parse(`${dataLS}`);
  });

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounterDuplicatedCorrect}>count +</button>
    </div>
  );
};
