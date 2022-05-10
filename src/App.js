import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Details from "./Pages/Details";

function App() {
  let [pageNumber, setPageNumber] = useState("1");
  let [pageSize, setpageSize] = useState("");
  let [searchTerm, setsearchTerm] = useState("");
  let [result, setResult] = useState([]);
  let api = `https://mock-api.drinks.test.siliconrhino.io/events?page=${pageNumber}&pageSize=${pageSize}&search=${searchTerm}
  `;
  useEffect(() => {
    let fetchedData = axios.get(api).then((res) => setResult(res));
  }, [api]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home setsearchTerm={setsearchTerm} result={result?.data} />}
        />
        <Route
          path="/details/:id"
          element={<Details result={result?.data} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
