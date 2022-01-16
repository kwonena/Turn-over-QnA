import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.module.css";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
