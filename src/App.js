import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookMark from "./components/AddBookMark";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddBook" element={<AddBookMark />} />
          <Route path="/nar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
