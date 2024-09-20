import React, { Component } from 'react';
import { createRoot, HashRouter, Route, Routes, Link} from "react-router-dom";
import GeneralPage from './Modules/GeneralPage/GeneralPage';
import GriseoVulPage from './Modules/GriseoVulPage/GriseoVulPage';
import StoneZolPage from './Modules/StoneZolPage/StoneZolPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element ={<GeneralPage />}></Route>
        <Route path='/StoneZol' element = {<StoneZolPage />}></Route>
        <Route path='/GriseoVul' element = {<GriseoVulPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div> 
    );
  }
}

export default App;