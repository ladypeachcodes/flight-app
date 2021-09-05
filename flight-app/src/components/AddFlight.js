import React from "react";

//Child Component the form to add one record
//controlled conponent
class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { data: {id: "", airline: "", flight_no:0, trip_type: "",
                             dep_airport:"", arr_airport:"", dep_date: "0000-00-00", 
                             return_date: "0000-00-00"}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let {name, value} = event.target;
        let data = this.state.data;
        data[name] = value;
        this.setState({data})

    }
    handleSubmit(event){
        //validate
        event.preventDefault();
        if(!this.error){
            this.props.addData(this.state.data);
            this.props.showForm();
            this.setState({ data: {id: "", airline: "", flight_no:0, trip_type: "",
            departure_airport:"", arrival_airport:"", departure_date: "0000-00-00", 
            return_date: "0000-00-00"}});
        }

    }
    render(){
        let data = this.state.data;
        return(
            <div className="container">
            <form>
            <div className="row">
            <div className="col">
            <label>ID:</label>
            <input className="form-control" min="1" max="5" type="number" name="id" value={data.id} onChange={this.handleChange}>
            </input></div>
            <div className="col">
            <label>Airline:</label>
            <input className="form-control" name="airline" value={data.airline} onChange={this.handleChange}>
            </input></div>
            <div className="col">
            <label>Flight Number:</label>
            <input className="form-control" name="flight_no" value={data.flight_no} onChange={this.handleChange}>
            </input></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Trip Type:</label>
            <input className="form-control" name="trip_type" value={data.trip_type} onChange={this.handleChange}>
            </input></div>
            <div className="col">
            <label>Departure Airport:</label>
            <input className="form-control" name="departure_airport" value={data.departure_airport} onChange={this.handleChange}>
            </input></div>
            <div className="col">
            <label>Arrival Airport:</label>
            <input className="form-control" name="arrival_airport" value={data.arrival_airport} onChange={this.handleChange}>
            </input></div>
            </div>
            <div className="row">
            <div className="col">
            <label>Departure Date:</label>
            <input className="form-control" type="date" name="departure_date" value={data.departure_date} onChange={this.handleChange}>
            </input></div>
            <div className="col">
            <label>Return Date:</label>
            <input className="form-control" type="date" name="return_date" value={data.return_date} onChange={this.handleChange}>
            </input></div>
            </div>
            <button type='submit' className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        );
    }
}

export default AddForm;