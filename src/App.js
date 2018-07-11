import React, { Component } from 'react';
import Posts from './components/Posts/Posts';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <h1 className={classes.Title}>React News App</h1>
          <Posts />
      </div>
    );
  }
}

export default App;
