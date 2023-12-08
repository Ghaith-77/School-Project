import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Main from "./pages/main";
import  "./App.css"
import Footer from "./component/footer/footer";

function App() {
  return (
    <div  className="app">
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
