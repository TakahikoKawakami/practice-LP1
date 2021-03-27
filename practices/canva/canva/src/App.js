import React, { Component } from 'react';
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

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    // this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.state.todo.push({
      title: this.refs.newText.value
    });

    this.setState({
      todo: this.state.todo
    });
    this.refs.newText.value = "";
  }

  render() {
    return (
      <div className="App">
        <MediaQuery query='(min-width: 768px)'>
          <Header height={'60px'}>
            <PcNavi/>
          </Header>
        </MediaQuery>
        <MediaQuery query='(min-width: 768px)'>
          sidebar
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
      </div>
    );
  }
}

export default App;
