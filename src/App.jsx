import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HookUseState } from "./components/HookUseState";
import { HookUseEffect } from "./components/HookUseEffect";
import { HookUseReducer } from "./components/HookUseReducer";
import { HookUseContext } from "./components/HookUseContext";
import { HooksUseMemo } from "./components/HooksUseMemo";

function App() {
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
      <HooksUseMemo />
    </>
  );
}

export default App;
