import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Screens/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
