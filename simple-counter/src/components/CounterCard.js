import React from 'react';

import '../styles/css/CounterCard.css';

const CounterCard = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-card-title">Counter</h1>
        <h3 className="counter-card-value">{count}</h3>
        <div className="counter-card-buttons-container">
          <button className="counter-card-button counter-card-button-decrement" onClick={onDecrement}>
            <i className="fa fa-minus" />
          </button>
          <button className="counter-card-button counter-card-button-increment" onClick={onIncrement}>
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;