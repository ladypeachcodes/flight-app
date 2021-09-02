import React from 'react';

//usuing stateless javascript to update
function App1(){
    var point = 10;
    function updateMe(){
        point = Math.floor(Math.random()*10);
        document.getElementById("me").innerHTML = point;
        console.log(point);
    }
    return(
        <div style={{margin: '25px', textAlign: 'center'}}><span id="me">{point}</span>
        <br></br>
        <button onClick={updateMe}>Update Me!</button>
        </div>
    );
}


//basic class with all required components
class App2 extends React.Component{
    render(){
        return(<h1>Message Here!</h1>)
    }
}

//proper way to update using state in react
class App extends React.Component{
    constructor(props){
        //must be first statement in constructor
        super(props);
        this.state = {point: 10};
        this.updateMe = this.updateMe.bind(this);
    }
    updateMe(){
        let rnd = Math.floor(Math.random()*10);
        this.setState({point: rnd});
        console.log(this.state.point);
    }
    render(){
        let message = "Please Update Me";
        return(
            <ChildUpdate point={this.state.point} updateMe={this.updateMe} msg = {message}/>
        );
        
    }
}

//as a class would need to render the return and this.props.variables. plus always extends React.Component
function ChildUpdate(props){
    return(
        <div style={{margin: '25px', textAlign: 'center'}}><span id="me">{props.point}</span>
        <br></br>
        <button onClick={props.updateMe}>{props.msg}</button>
        </div>
    );

}



export default App;

// export {App, x}; for how to export more than one. 