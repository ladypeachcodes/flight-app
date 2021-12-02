import React from 'react';
import { NavLink } from 'react-router-dom';



function NavMenu(props){
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {props.navData.map( (data, index)=>{
            return(  
            <li key={index} className="nav-item">
            <NavLink className={data.active === true ? "nav-link active" : "nav-link"} aria-current="page" to={data.url}>
            {data.text}
            </NavLink>
            </li>
            );
        })
        }
        </ul>
    </div>
    );
}

function Nav(props){
    return(
        <div>
        {/*Navigation -- */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <NavMenu navData={props.navData}/>
        </div>
    </nav>
    </div>
    );
}

export default Nav;