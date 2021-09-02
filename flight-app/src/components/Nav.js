import React from 'react';

function NavToggleResponsive(){
    return(
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

    )
}

function NavMenu(props){
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {props.navData.map( (data, index)=>{
            return(  
            <li key={index} className="nav-item">
            <a className={data.active === true ? "nav-link active" : "nav-link"} aria-current="page" href={data.url}>
            {data.text}
            </a>
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
            <a className="navbar-brand" href="#!">Flight App</a>
            <NavToggleResponsive/>
            <NavMenu navData={props.navData}/>
        </div>
    </nav>
    </div>
    );
}

export default Nav;