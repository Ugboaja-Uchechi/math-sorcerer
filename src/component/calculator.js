import React, { useState } from 'react';
import calculate from '../logic/calculate';

const MyCalculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  const { total, next, operation } = state;
  let result = 0;
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <main>
      <div className="result">{result}</div>
      <div className="symbols">
        <button onClick={clickHandler} name="AC" type="button">AC</button>
        <button onClick={clickHandler} name="+/-" type="button">+/-</button>
        <button onClick={clickHandler} name="%" type="button">%</button>
        <button onClick={clickHandler} name="&#247;" type="button" className="orange">&#247;</button>
        <button onClick={clickHandler} name="7" type="button">7</button>
        <button onClick={clickHandler} name="8" type="button">8</button>
        <button onClick={clickHandler} name="9" type="button">9</button>
        <button onClick={clickHandler} name="x" type="button" className="orange">x</button>
        <button onClick={clickHandler} name="4" type="button">4</button>
        <button onClick={clickHandler} name="5" type="button">5</button>
        <button onClick={clickHandler} name="6" type="button">6</button>
        <button onClick={clickHandler} name="-" type="button" className="orange">-</button>
        <button onClick={clickHandler} name="1" type="button">1</button>
        <button onClick={clickHandler} name="2" type="button">2</button>
        <button onClick={clickHandler} name="3" type="button">3</button>
        <button onClick={clickHandler} name="+" type="button" className="orange">+</button>
        <button onClick={clickHandler} name="0" type="button" className="extra">0</button>
        <button onClick={clickHandler} name="." type="button">.</button>
        <button onClick={clickHandler} name="=" type="button" className="orange">=</button>
      </div>
    </main>
  );
};

export default MyCalculator;
