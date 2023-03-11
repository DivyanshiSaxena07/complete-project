import { Component } from "react";

export default class Currenttime extends Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    render(){
        return<div className="container">
        <div className="row mt-5">
<div className="col md-4">
    <h1>{this.state.time}</h1>
<button className="btn btn-success mx-3" onClick={this.state.time}>start</button>
         

<button className="btn btn-danger mx-3">stop</button>

<button className="btn btn-warning mx-3">Lap</button>
</div>
        </div>
         
        </div>
    }
}