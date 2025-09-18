import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MemoSlider from "./components/MemoSlider/MemoSlider";
import Params from "./components/Params/Params.tsx";
import Auth from "./components/Auth/Auth.tsx";
import { Portal } from "./components/Portal";
import { HooksUseCallback } from "./components/HooksUseCallback";
import { HooksUseMemo } from "./components/HooksUseMemo";
import HOCExample from "./components/HOC/HighOrderComponent.tsx";
import { RegisterForm } from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HooksUseMemo />} />
        <Route path="/callback" element={<HooksUseCallback />} />
        <Route path="/hoc" element={<HOCExample />} />
        <Route path="/register-form" element={<RegisterForm />} />

        <Route path="/portal" element={<Portal />} />
        <Route path="/params/:slug" element={<Params />} />
        <Route
          path="/private"
          element={
            <Auth>
              <div>Private</div>
            </Auth>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      {/* <HookUseState />
      <HookUseEffect /> */}
      {/* <HookUseReducer /> */}
      {/* <HookUseContext /> */}
      {/* <HooksUseMemo /> */}
      {/* <HooksUseCallback /> */}
      {/* <button onClick={doFetch}> Fetch Again</button> */}
    </>
  );
}

export default App;
