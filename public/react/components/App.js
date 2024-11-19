import React, { useEffect, useState } from "react";
import Items from "./Items/Items.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleItem from "./Single Item/SingleItem.jsx";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";
import ItemsCard from "./Items/ItemsCard.jsx";

function App() {
  return (
    <>
      <h1 className="logo">Inventory App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route index element={<Items />} />
          <Route path="*" element={<SingleItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
