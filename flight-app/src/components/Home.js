import * as React from "react";
import air from '../models/air.jpg';

export default function Home() {

return(
    <div className="mx-auto flex justify-content-center" style={{ width: '85%'}}>
    <h2>Info</h2>
    <img alt="old fashioned airplane" src={air} style={{ width: '85%' }}></img>
    <h6>This is a React app, using class components and hooks, which allows a user to enter in flight info,
     including all CRUD operations. Some features use state and others do not.</h6>
    </div>
)

}