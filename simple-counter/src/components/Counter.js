import React from 'react';

import '../styles/css/Counter.css';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="container">
      <div className="counter">
        <h1 className="counter__title">Counter</h1>
        <h3 className={"counter__value ee_" + count}>{count}</h3>
        <div className="counter__actions">
          <button className="counter__button counter__button--decrement" onClick={onDecrement}>
            <i className="fa fa-minus" />
          </button>
          <button className="counter__button counter__button--increment" onClick={onIncrement}>
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;