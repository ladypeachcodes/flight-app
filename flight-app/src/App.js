import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';
import NavData from './models/NavData';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {navData: NavData}
  }
  render() {
    return (
      <div className="App">
        <Nav navData={this.state.navData}></Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer></Footer>
      </div>
    );}
}

export default App;
