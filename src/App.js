import SignUp from "./Component/AUTHENTICATION/SignUp";
// import Main from "./Component/Main.jsx/Main";
import "../src/Component/All.css";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./Component/Main.jsx/Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
      {/* <SignUp /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
