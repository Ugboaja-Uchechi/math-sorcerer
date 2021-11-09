import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import MyCalculator from './component/Calculator';
import Quotes from './component/Quotes';
import Navbar from './component/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<MyCalculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </>
    );
  }
}

export default App;
