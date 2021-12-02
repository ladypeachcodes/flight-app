import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddForm(props) {
    const { register, handleSubmit} = useForm();
    let navigate = useNavigate();
    let maxNum = Math.max(props.flightids);

    const onSubmit = data => {
      let temp = {};
      let newData = Object.assign(temp, data);
      props.addData(temp);
      navigate("/flights");
    }

        return(
            <div className="container">
            <form id="addForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="col">
            <label>ID:</label>
            <input className="form-control" {...register("id", {value: maxNum+1})}>
            </input>
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
            <input className="form-control"  {...register("departure_airport")}>
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
            <input className="form-control" type="date" {...register("return_date", { required: true })}/>
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