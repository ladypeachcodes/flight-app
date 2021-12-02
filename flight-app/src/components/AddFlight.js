import React from "react";

//Child Component the form to add one record
//controlled conponent
const blankData =  {
    "id":0,
    "airline":"",
    "flight_no":"",
    "trip_type":"",
    "departure_airport":"",
    "arrival_airport":"",
    "departure_date":"",
    "return_date":""
};
const blankError =  {id: "", airline: "", flight_no:"", trip_type: "",
departure_airport:"", arrival_airport:"", departure_date: "", 
return_date: ""};

class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : {
            "id":0,
            "airline":"",
            "flight_no":"",
            "trip_type":"",
            "departure_airport":"",
            "arrival_airport":"",
            "departure_date":"",
            "return_date":""
        }, error : blankError};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    validate() {
        let error = {};
        let data = this.state.data;
        for (let item of this.props.flightids) {
            if (data.id === item) {
                error['id'] = "Cannot have duplicate flight ids";
                this.setState({error : error});
            }
        }
        if (data['id'] < 1 || data['id'] > 99999 || !Number(data['id']))  {
            error['id'] = "Please enter id as a unique number (1-5 digits)" + data.id;
            this.setState({error : error});
        }
        if (data['airline'] === "" || !String(data['airline'])){
               error['airline'] = "Please enter an airline";
               this.setState({error : error});
              }
        if(data['flight_no'] === ""){
               error['flight_no'] = "Please enter a flight number";
               this.setState({error : error});
           }
        if(data['departure_airport'] === ""){
                error['departure_airport'] = "Please enter a departure airport"; 
                this.setState({error : error});
           }
        if(data['departure_airport'] === data['arrival_airport']){
              error['arrival_airport']  = "Make sure arrival airport and departure airport are different";
              this.setState({error : error});
            }
        if(data['return_date'] < data['departure_date']){
               error['return_date'] = "Return Data Must be after departure date";
               error['departure_date'] = "Return Data Must be after departure date";
               this.setState({error : error});
           }
        for(let key in error){
            if(error[key] != null){
                return false;
            }
        }   
        
        return true;

    }

    clearData(){
        let data = {
            "id":0,
            "airline":"",
            "flight_no":"",
            "trip_type":"",
            "departure_airport":"",
            "arrival_airport":"",
            "departure_date":"",
            "return_date":""
        };
        this.setState({data});
        console.log(this.state.data);
        
    }

    handleChange(event){
        let {name, value} = event.target;
        blankData[name] = value;
        let maxNum = Math.max(this.props.flightids);
        if (blankData['id'] == 0 || blankData['id'] == "") {
            blankData['id'] = maxNum + 1;
        }
        this.setState({data: blankData})
    }



    handleSubmit(event){
        event.preventDefault();
        this.setState({error: blankError});
        var valid = this.validate();
        if(valid){
            let temp = {};
            let newData = Object.assign(temp, this.state.data);
            this.props.addData(temp);
            this.clearData();
        }
    }
    render(){
        let error = this.state.error;
        return(
            <div className="container">
            <form id="addForm">
            <div className="row">
            <div className="col">
            <label>ID:</label>
            <input className="form-control" min="1" max="5" type="int" onChange={this.handleChange} name="id">
            </input>
            <div className="invalid-feedback2">{error['id']}</div>
            </div>
            <div className="col">
            <label>Airline:</label>
            <input className="form-control" name="airline" onChange={this.handleChange}>
            </input>
            <div className="invalid-feedback2">{error.airline}</div>
            </div>
            <div className="col">
            <label>Flight Number:</label>
            <input className="form-control" name="flight_no" onChange={this.handleChange}>
            </input><div className="invalid-feedback2">{error.flight_no}</div></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Trip Type:</label>
            <select className="form-control" name="trip_type" onChange={this.handleChange}>
            <option>Select Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multiple Destination</option>
            </select><div className="invalid-feedback2">{error.trip_type}</div></div>
            <div className="col">
            <label>Departure Airport:</label>
            <input className="form-control" name="departure_airport" onChange={this.handleChange}>
            </input><div className="invalid-feedback2">{error.departure_airport}</div></div>
            <div className="col">
            <label>Arrival Airport:</label>
            <input className="form-control" name="arrival_airport" onChange={this.handleChange}>
            </input><div className="invalid-feedback2">{error.arrival_airport}</div></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Departure Date:</label>
            <input className="form-control" type="date" name="departure_date" onChange={this.handleChange}>
            </input><div className="invalid-feedback2">{error.departure_date}</div></div>
            <div className="col">
            <label>Return Date:</label>
            <input className="form-control" type="date" name="return_date" onChange={this.handleChange}>
            </input><div className="invalid-feedback2">{error.return_date}</div></div>
            </div>
            <button type='submit' className="btn btn-success m-2" onClick={this.handleSubmit}>Submit</button>
            </form>
            <br></br>
            <ul>
            </ul>
            </div>
        );
    }
}

export default AddForm;