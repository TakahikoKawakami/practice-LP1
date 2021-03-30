import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';
import Menu from './Menu';
import MobileNavi from './Navi/MobileNavi';
import PcHelp from './PcHelp';
import Header from './Header';
import PcNavi from './Navi/PcNavi';
import PopUp from './PopUp/PopUp';

import './App.css';

export const PopUpContext = createContext();

const App = () => {
  const [ popUpProps, setPopUpProps ] = useState({
    isOpen: false, 
    x: 0, 
    y: 0,
    offsetX: 0,
    offsetY: 0,
  });
  return (
      <div className="App">
        <PopUpContext.Provider value={[ popUpProps, setPopUpProps ]}>
          <MediaQuery query='(min-width: 768px)'>
            <Header height={'60px'}>
              <PcNavi/>
            </Header>
          </MediaQuery>
          
          <Router basename="/">
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/design' component={Design}/>
              {/* <Route path='/menu' component={Menu}/> */}
              <Navbar />
            </div>
          </Router>
          <MobileNavi />
          <PcHelp />
          <PopUp />
        </PopUpContext.Provider>
      </div>
  );
}

export default App;
