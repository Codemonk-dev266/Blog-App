import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./component/navBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
