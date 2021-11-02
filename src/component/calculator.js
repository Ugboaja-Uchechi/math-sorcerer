import React from 'react';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="result">
          0
        </div>
        <div className="symbols">
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit" className="orange">&#247;</button>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit" className="orange">x</button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit" className="orange">-</button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit" className="orange">+</button>
          <button type="submit" className="extra">0</button>
          <button type="submit">.</button>
          <button type="submit" className="orange">=</button>
        </div>
      </main>
    );
  }
}

export default MyCalculator;
