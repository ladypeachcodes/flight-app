import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FlightList from './components/FlightList';
import React from 'react';
import NavData from './models/NavData';
import FlightData from './models/FlightData';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {navData: NavData, flightData : FlightData}
  }
  render() {
    return (
      <div className="App">
        <Nav navData={this.state.navData}></Nav>
        <FlightList flightData={this.state.flightData}></FlightList>
        <Footer></Footer>
      </div>
    );
  }


}






export default App;
