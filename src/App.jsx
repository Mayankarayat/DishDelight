import { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Our_Food from "./components/Our-food/Our_Food";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./Cart/Cart";
import { FoodProvider } from "./FoodContex/FoodContex";

function App() {

  

  return (
    <BrowserRouter>
    <FoodProvider>
          <Header/>
        <Routes>
              <Route path="/DishDelight" element={<Home/>}/>
              <Route path="/food" element={<Our_Food/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/cart" element={<Cart/>}/>
        </Routes>
          <Footer />
    </FoodProvider>
      </BrowserRouter>
  );
}

export default App;
