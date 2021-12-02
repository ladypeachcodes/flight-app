import * as React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function AddForm(props) {
  
    let navigate = useNavigate();
    let {id} = useParams();
    let index = props.flightData.findIndex( e => e.id === parseInt(id));
    let flight = props.flightData[index];
    const { register, handleSubmit} = useForm(
        {defaultValues:
            {id: flight.id, airline: flight.airline, flight_no:flight.flight_no,
            trip_type:flight.trip_type,
            departure_airport: flight.departure_airport,
            arrival_airport: flight.arrival_airport,
            departure_date:flight.departure_date,
            return_date: flight.return_date }});
    
    const onSubmit = data => {
        props.update(data, index);
        navigate("/flights");
    }

        return(
            <div className="container">
            <form id="addForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="col">
            <label>ID:</label>
            <input hidden className="form-control" type="text" {...register("id",{value: flight.id})}>
            </input>
            <p className="form-control">{flight.id}</p>
            {/* <div className="invalid-feedback2">{errors.id}</div> */}
            </div>
            <div className="col">
            <label>Airline:</label>
            <input className="form-control"{...register("airline")}>
            </input>
            {/* <div className="invalid-feedback2">{errors.airline}</div> */}
            </div>
            <div className="col">
            <label>Flight Number:</label>
            <input className="form-control" {...register("flight_no")}>
            </input>
            {/* <div className="invalid-feedback2">{errors.flight_no}</div> */}
            </div>
            </div>
            <div className="row">
            <div className="col">
            <label>Trip Type:</label>
            <select className="form-control" {...register("trip_type")}>
            <option>Select Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multiple Destination</option>
            </select>
            {/* <div className="invalid-feedback2">{errors.trip_type}</div> */}
            </div>
            <div className="col">
            <label>Departure Airport:</label>
            <input className="form-control" {...register("departure_airport")}>
            </input>
            {/* <div className="invalid-feedback2">{errors.departure_airport}</div> */}
            </div>
            <div className="col">
            <label>Arrival Airport:</label>
            <input className="form-control" {...register("arrival_airport")}>
            </input>
            {/* <div className="invalid-feedback2">{errors.arrival_airport}</div> */}
            </div>
            </div>
            <div className="row">
            <div className="col">
            <label>Departure Date:</label>
            <input className="form-control" type="date" {...register("departure_date")}>
            </input>
            {/* <div className="invalid-feedback2">{errors.validate_date}</div> */}
            </div>
            <div className="col">
            <label>Return Date:</label>
            <input className="form-control" type="date" {...register("return_date")}></input>
            {/* <div className="invalid-feedback2">{errors.return_date}</div> */}
            </div>
            </div>
            <button type='submit' className="btn btn-success m-2">Submit</button>
            </form>
            <br></br>
            <ul>
            </ul>
            </div>
        );

        }