import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Loader from "./screens/Loader";
import ProductDetails from "./screens/ProductDetails";
import SortPopup from "./screens/SortPopup";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isDetails, setIsDetails] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isSort ? <SortPopup setIsSort={setIsSort} /> : null}
      <Header isDetails={isDetails} />
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route
          path="/"
          element={loading ? <Loader /> : <Home setIsSort={setIsSort} />}
        />

        <Route
          path="/prooduct-details"
          element={
            loading ? (
              <Loader />
            ) : (
              <ProductDetails setIsDetails={setIsDetails} />
            )
          }
        />
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </>
  );
}
