import React from "react";

//Child Component the form to add one record
//controlled conponent
const blankSlate =  { data: {id: 0, airline: "", flight_no:"", trip_type: "",
departure_airport:"", arrival_airport:"", departure_date: "", 
return_date: ""}, error: {id: "", airline: "", flight_no:"", trip_type: "",
departure_airport:"", arrival_airport:"", departure_date: "", 
return_date: ""}};

class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = blankSlate;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate = () => {
        let error = {};
        let data = this.state.data;
        if (data['id'] === 0 || !Number(data['id'])){
            error['id'] = "Please enter id as a number value";
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
              error['arrival_airport']  ="Make sure arrival airport and departure airport are different";
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

    handleChange(event){
        let {name, value} = event.target;
        let data = this.state.data;
        data[name] = value;
        this.setState({data});
    }

    handleSubmit = event =>{
        event.preventDefault();
        let data = this.state.data;
        const valid = this.validate();
        if(valid){
            this.props.addData(this.state.data);
            this.props.showForm();
            //clear form
            this.setState(blankSlate);
        }
    }
    render(){
        let data = this.state.data;
        let error = this.state.error;
        return(
            <div className="container">
            <form>
            <div className="row">
            <div className="col">
            <label>ID:</label>
            <input className="form-control" min="1" max="5" onChange={this.handleChange}  type="number" name="id" value={data.id}>
            </input>
            <div className="invalid-feedback2">{error['id']}</div>
            </div>
            <div className="col">
            <label>Airline:</label>
            <input className="form-control" name="airline" onChange={this.handleChange}  value={data.airline}>
            </input>
            <div className="invalid-feedback2">{error.airline}</div>
            </div>
            <div className="col">
            <label>Flight Number:</label>
            <input className="form-control" name="flight_no" onChange={this.handleChange}  value={data.flight_no}>
            </input><div className="invalid-feedback2">{error.flight_no}</div></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Trip Type:</label>
            <select className="form-control" name="trip_type" onChange={this.handleChange}  value={data.trip_type}>
            <option>Select Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multiple Destination</option>
            </select><div className="invalid-feedback2">{error.trip_type}</div></div>
            <div className="col">
            <label>Departure Airport:</label>
            <input className="form-control" name="departure_airport" onChange={this.handleChange}  value={data.departure_airport}>
            </input><div className="invalid-feedback2">{error.departure_airport}</div></div>
            <div className="col">
            <label>Arrival Airport:</label>
            <input className="form-control" name="arrival_airport" onChange={this.handleChange}  value={data.arrival_airport}>
            </input><div className="invalid-feedback2">{error.arrival_airport}</div></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Departure Date:</label>
            <input className="form-control" type="date" name="departure_date" onChange={this.handleChange}  value={data.departure_date}>
            </input><div className="invalid-feedback2">{error.departure_date}</div></div>
            <div className="col">
            <label>Return Date:</label>
            <input className="form-control" type="date" name="return_date" onChange={this.handleChange} value={data.return_date}>
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