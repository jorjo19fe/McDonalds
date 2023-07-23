// import logo from "./logo.svg";
import React from "react";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import EachProduct from "./components/EachProduct/EachProduct";
import Locations from "./components/Locations/Locations";
import Drive from "./components/Drive/Drive";
import Footer from "./components/Footer/Footer";
import Loader from "./components/loader/Loader";
import images from "./components/img/carouselData";
import { HashRouter } from "react-router-dom";
import ProductsData from "./components/img/ProductsData.json";
import headerData from "./components/img/header.json";

// გასაკეთებელია პროპს დინამიურად
//
// მიღება გასაგებია
//
// გადაცემა გვინდა
function App() {
  return (
    <div>
      <HashRouter>
        <div className="App">
          <Header data={headerData}></Header>
          <Routes>
            <Route path="/" element={<Main images={images} />} />
            <Route path="/menu" element={<Products data={ProductsData} />} />
            <Route
              path="/product/:id"
              element={<EachProduct data={ProductsData} />}
            />
            <Route path="/locations" element={<Locations />} />
            <Route path="/mc-drive" element={<Drive />} />
          </Routes>
          <Footer></Footer>
          <Loader></Loader>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
