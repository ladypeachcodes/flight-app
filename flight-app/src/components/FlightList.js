import React from 'react';

function THead(){
    return(
        <thead className="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Airline</th>
          <th scope="col">Flight Number</th>
          <th scope="col">Trip Type</th>
          <th scope="col">Departure Airport</th>
          <th scope="col">Arrival Airport</th>
          <th scope="col">Departure Date</th>
          <th scope="col">Return Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
    )
}

function TBody(props) {
    return(
        <tbody>
        {props.flightData.map((flight, index) => {
         let editUrl = "/edit/" + flight.id;
         return (
           <tr key={index}>
             <th scope="row">{flight.id} </th>
             <td> {flight.airline} </td>
             <td> {flight.flight_no} </td>
             <td> {flight.trip_type} </td>
             <td> {flight.departure_airport} </td>
             <td> {flight.arrival_airport} </td>
             <td> {flight.departure_date} </td>
             <td> {flight.return_date} </td>
             <td>
             <a type="button" className="btn btn-success btn-just-icon btn-sm m-1" href={editUrl}>Edit</a>
             <button className="btn btn-danger btn-just-icon btn-sm m-1" onClick={ ()=> deleteFlight(flight.id)}> Delete 
             </button> </td>
           </tr>
         );})
         }
         </tbody>
    )
    
}


function  FlightList(props){
  return(
    <div className="container">
    <h1>Flight Schedule</h1>
    <div className="table-responsive-sm">
    <table className="table table-striped table-bordered">
    <THead></THead>
    <TBody flightData={props.flightData}></TBody>
     </table>
     </div></div>
    )  
}

function deleteFlight(id) {
    console.log("deleteFlight" + id);
}

export default FlightList;