import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';

function App() {
  const [coins, setCoins] = useState([]);
  const [extraCoinPrice, setExtraCoinPrice] = useState(null);

  //const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';
  const extraCoinUrl =
    'https://api.coingecko.com/api/v3/simple/price?ids=nucleon&vs_currencies=usd';

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const response = await axios.get(url);
        setCoins(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getExtraCoinData = async () => {
      try {
        const response = await axios.get(extraCoinUrl);
        setExtraCoinPrice(response.data['nucleon'].usd);
      } catch (error) {
        console.log(error);
      }
    };

    const coingeckoUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';

  useEffect(() => {
    axios
      .get(coingeckoUrl)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    // Update coin data every 5 seconds
    const interval = setInterval(() => {
      getCoinData();
      getExtraCoinData();
    }, 5000);

    // Call getCoinData and getExtraCoinData on initial render
    getCoinData();
    getExtraCoinData();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} extraCoinPrice={extraCoinPrice} />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;