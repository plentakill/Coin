import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
    const extraCoinPrice = props.extraCoinPrice ? props.extraCoinPrice : 0;
    const price = props.coin.current_price + extraCoinPrice;
    
    return (
        <div className='coin-row'>
            <p>{props.index}</p>
            <div className='img-symbol'>
                <img src={props.coin.image} alt='' />
                <p>{props.coin.symbol.toUpperCase()}</p>
            </div>
            <p>${price.toLocaleString()}</p>
            <p className={props.coin.price_change_percentage_24h > 0 ? 'green' : 'red'}>{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${props.coin.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>${props.coin.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem
