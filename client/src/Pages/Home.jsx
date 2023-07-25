import React, { useState } from "react";
import MainNav from "../components/Navbars/MainNav";
import StockCard from "../components/Cards/StockCard";
import Search from "../components/Search/Search";
import axios from "axios";
import Spinner from "../components/Loading/Spinner";
const Home = () => {
  const [stockDetails, setStockDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (data) => {
    setLoading(true);
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
            console.error(res.data.error);
        }
        setLoading(false);
      })
      .catch((err) => console.error("Something went wrong"));
  };
  console.log(stockDetails);
  return (
    <>
      <MainNav />
      <br />
      <main className="container my-3">
        <Search handleSubmit={handleSubmit} />
        <br />
        <br />
        <div className="my-5 text-center">
          {loading ? <Spinner size="lg" /> : <StockCard stock={stockDetails} />}
        </div>
      </main>
    </>
  );
};

export default Home;
