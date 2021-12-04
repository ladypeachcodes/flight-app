import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import FlightList from './components/FlightList';
import React from 'react';
import NavData from './models/NavData';
// import FlightData from './models/FlightData';
import AddForm from './components/AddFlightFunct';
import EditForm from './components/EditFlight';
import Home from './components/Home';
import About from './components/About';
//const axios = require('axios');
import axios from 'axios'

const apiUrl = 'https://flightscheduler.herokuapp.com/flights/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navData: NavData, flightData: [], showForm: false, ids: [] }
    this.addData = this.addData.bind(this);
    this.update = this.update.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
    this.getData = this.getData.bind(this);
    this.getData();
  }

  //   componentDidMount(){
  //     this.getData();
  //  }
  //  async getData(){
  //   const res = await axios.get(apiUrl);
  //   const { data } = await res;
  //   this.setState({flighData: data})
  // }

  // componentDidMount = async()=>{
  //   await axios.get('https://flightscheduler.herokuapp.com/flights/')
  //   .then(res =>{
  //     this.setState({flightData: res.data});
  //   }).catch(function (error) {
  //     console.log(error);
  //   });
  // }

  getData = () => {
    axios.get(apiUrl)
      .then((response) => {
        this.setState({
          flightData: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addData = (newData) => {
    // axios.post(apiUrl, { newData } )
    axios.post( apiUrl, newData )
      .then(res => {
        console.log(res.data);
        this.getData();
        // let data = this.state.flightData;
        // data.push(res.data);
        // this.setState({flightData: data});
      }).catch(error => {
        console.log(error);
      });

    // let ids = [];
    // axios.get(apiUrl).then(res => {
    //   for (let item of res.data) {
    //     ids.push(Number(item.id));
    //     this.setState({ ids });
    //   }
    // })
  }
  deleteFlight = (id) => {
    axios.delete(apiUrl + id)
      .then(response => {
        console.log(response);
        this.getData();
        // let flightData = this.state.flightData;
        // let index = flightData.findIndex(flight => flight.id == id);
        // flightData.splice(index, 1);
        // this.setState({flightData});
      })
      .catch(error => {
        console.log(error);
      })
  }

  update(newData, id) {
    axios.put( apiUrl + id, newData )
      .then(response => {
        console.log(response);
        this.getData();
        // let data = this.state.flightData;
        // data[index] = response.data;
        // this.setState({flightData: data});
        // let ids = [];
        // for (let item of this.state.flightData) {
        //   ids.push(Number(item.id));
        //   this.setState({ids});}
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav navData={this.state.navData}></Nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/edit/:id" element={<EditForm flightData={this.state.flightData} update={this.update}></EditForm>}> </Route>
            {/* <Route path="/edit/:id" 
              //  render= { ({match}) => <EditForm flights={this.state.flightData} update = {this.update} id={match.params.id} />}
              element= { ({match}) => <EditForm flights={this.state.flightData} update = {this.update} id={match.params.id} />}
        > </Route> */}
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/flights" element={<FlightList flightData={this.state.flightData} deleteFlight={this.deleteFlight} />}>
            </Route>
            <Route path="/add" element={<AddForm addData={this.addData} flightids={this.state.ids}></AddForm>}>
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
