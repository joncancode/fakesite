import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Video from './components/Video';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Video/>
        <BottomNav/>
        <Footer/>

      </div>
    );
  }
}

export default App;
