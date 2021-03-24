import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';
import Menu from './Menu';
// import NavItem from './NavItem';

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
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/design' component={Design}/>
            <Route path='/menu' component={Menu}/>
            <Navbar />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
