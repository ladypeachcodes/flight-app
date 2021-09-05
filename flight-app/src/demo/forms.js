import React from "react";

//Parent Component - contains main data
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.addData = this.addData.bind(this);
    }

    addData(newData){
        let data = this.state.data;
        data.push(newData);
        this.setState({data: data});
    }

    render(){
        let data = this.state.data;
        return(
            <div className="col-lg-12 text-center">
            <h1>React Forms Controlled Compnents</h1>
            <Addform addData={this.addData} data={this.state.data}></Addform>
            <hr></hr>
            <ul>
                {
                    data.map((e,i)=>{
                        return(
                            <li key={i}>{e.user} | {e.game} | {e.points}</li>
                        )
                    })
                }
            </ul>
            </div>
        );
    }
}

//Child Component the form to add one record
//controlled conponent
class Addform extends React.Component{
    constructor(props){
        super(props);
        this.state = { data: {user: "", game: "", points:0}}
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
            this.setState({ data: {user: "", game: "", points:0}})
        }

    }
    render(){
        let data = this.state.data;
        return(
            <div className="container">
            <form>
            <label>User:</label>
            <input className="form-control" name="user" value={data.user} onChange={this.handleChange}></input>
            <label>Game:</label>
            <input className="form-control" name="game" value={data.game} onChange={this.handleChange}></input>
            <label>Points:</label>
            <select className="form-control" name="points" defaultValue={data.points} onChange={this.handleChange}>
            <option>5</option>
            <option>15</option>
            <option>25</option>
            <option>30</option>
            </select>
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        );
    }
}

export default App;