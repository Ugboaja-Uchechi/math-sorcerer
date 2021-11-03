import React from 'react';
import calculate from '../logic/calculate';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  buttonClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate({ ...this.state }, buttonName);
    this.setState(newObj);
  };

  render() {
    const { total, next, operation } = this.state;
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
          <button onClick={(e) => this.buttonClicked(e)} type="button">AC</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">+/-</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">%</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="orange">&#247;</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">7</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">8</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">9</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="orange">x</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">4</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">5</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">6</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="orange">-</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">1</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">2</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">3</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="orange">+</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="extra">0</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button">.</button>
          <button onClick={(e) => this.buttonClicked(e)} type="button" className="orange">=</button>
        </div>
      </main>
    );
  }
}

export default MyCalculator;
