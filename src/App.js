import React from 'react';
import './App.css';
import MyCalculator from './component/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyCalculator />
      </div>
    );
  }
}

export default App;
