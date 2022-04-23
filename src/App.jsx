import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Loader from "./screens/Loader";
import ProductDetails from "./screens/ProductDetails";
import SizeChart from "./screens/SizeChart";
import SizePopup from "./screens/SizePopup";
import SortPopup from "./screens/SortPopup";
import WishlistPopup from "./screens/WishlistPopup";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [isSizeChart, setIsSizeChart] = useState(false);
  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isSort ? <SortPopup setIsSort={setIsSort} /> : null}
      {isSize ? <SizePopup setIsSize={setIsSize} /> : null}
      {isWish ? <WishlistPopup setIsWish={setIsWish} /> : null}
      {isSizeChart ? null : <Header isDetails={isDetails} />}

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
              <ProductDetails
                setIsDetails={setIsDetails}
                setIsSize={setIsSize}
                setIsWish={setIsWish}
              />
            )
          }
        />
        <Route
          path="/size-chart"
          element={<SizeChart setIsSizeChart={setIsSizeChart} />}
        />
      </Routes>
      {/* </Suspense> */}
      {isSizeChart ? null : <Footer />}
    </>
  );
}
