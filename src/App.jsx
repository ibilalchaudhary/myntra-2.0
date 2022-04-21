import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./screens/Home";
import Loader from "./screens/Loader";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
