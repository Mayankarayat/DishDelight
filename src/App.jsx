import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Our_Food from "./components/Our-food/Our_Food";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {

  const [count, setcount] = useState(0)

  const handleadd = ()=>{
    setcount(count +1 );
  }

  return (
    <>
      <BrowserRouter>
          <Header count={count}/>
        <Routes>
              <Route path="/" element={<Home handle={handleadd}/>}/>
              <Route path="/food" element={<Our_Food/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
