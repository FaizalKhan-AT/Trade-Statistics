import React, { useState } from "react";
import MainNav from "../components/Navbars/MainNav";
import StockCard from "../components/Cards/StockCard";
import Search from "../components/Search/Search";
import axios from "axios";
import Spinner from "../components/Loading/Spinner";
const Home = () => {
  const [stockDetails, setStockDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (data) => {
    setLoading(true);
    setError("");
    axios
      .post("/fetchStockData", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        switch (res.data.status) {
          case "ok":
            setStockDetails(res.data.data);
            break;
          case "error":
            setError(res.data.error);
            break;
          default:
            break;
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Data not found :(");
      });
  };
  return (
    <>
      <MainNav />
      <br />
      <main className="container my-3">
        <Search handleSubmit={handleSubmit} />
        <br />
        <br />
        <div className="my-5 text-center">
          {loading ? (
            <Spinner size="lg" />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <StockCard stock={stockDetails} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
