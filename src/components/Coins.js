import React from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem';

import './Coins.css';

const Coins = ({ coins }) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {coins.map((coin, index) => (
          <Link to={`/coin/${coin.id}`} key={coin.id}>
            <CoinItem coin={coin} index={index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
