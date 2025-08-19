import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HookUseState } from "./components/HookUseState";
import { HookUseEffect } from "./components/HookUseEffect";
import { HookUseReducer } from "./components/HookUseReducer";
import { HookUseContext } from "./components/HookUseContext";
// import { HooksUseMemo } from "./components/HooksUseMemo";
import { HooksUseCallback } from "./components/HooksUseCallback";
import { useFetch } from "./components/hooks/useFetch";

function App() {
  const [{ result, error, isLoading }, doFetch] = useFetch(
    "https://rickandmortyapi.com/api/location"
  );

  console.log({ result, error, isLoading });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <HookUseState />
      <HookUseEffect /> */}
      {/* <HookUseReducer /> */}
      {/* <HookUseContext /> */}
      {/* <HooksUseMemo /> */}
      {/* <HooksUseCallback /> */}
      <button onClick={doFetch}> Fetch Again</button>
    </>
  );
}

export default App;
