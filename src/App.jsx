import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MemoSlider from "./components/MemoSlider/MemoSlider";
import Params from "./components/Params/Params.tsx";
import Auth from "./components/Auth/Auth.tsx";

function App() {
  return (
    <>
      <Link to="/private">Private</Link>
      <Routes>
        <Route path="/" element={<MemoSlider />} />
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
