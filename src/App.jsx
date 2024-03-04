import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Shose from "./components/Shose";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Details from "./components/Details";
import DemoMsg from "./components/DemoMsg";
import { getData } from "./redux/productSlice.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Shose" element={<Shose />}></Route>
        <Route path="Shose/:id" element={<Details />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="demo" element={<DemoMsg />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
