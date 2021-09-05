import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FlightList from './components/FlightList';
import React from 'react';
import NavData from './models/NavData';
import FlightData from './models/FlightData';
import AddForm from './components/AddFlight';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {navData: NavData, flightData : FlightData, showForm: false}
    this.addData = this.addData.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  addData(newData){
    let data = this.state.flightData;
    data.push(newData);
    this.setState({flightData: data});
}

  showForm(){
    //TODO fix toggle
    console.log("function called");
    this.setState({showForm : !this.state.showForm});
  }

  render() {
    return (
      <div className="App">
        <Nav navData={this.state.navData}></Nav>
        <button className="btn btn-secondary" onClick={this.showForm}>Add a Flight</button>
        {this.state.showForm === true ? 
        <AddForm showForm={this.showForm} addData={this.addData} data={this.state.data}></AddForm>
        :
        <FlightList flightData={this.state.flightData}></FlightList>
        }
        <Footer></Footer>
      </div>
    );
  }


}






export default App;
