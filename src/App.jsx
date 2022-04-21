import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
