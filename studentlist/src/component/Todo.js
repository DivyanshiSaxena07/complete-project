import { Component } from "react";
import Data from "./todoData.js";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoData: Data,
            priorityList: ['Low', 'Medium', 'High'],
            selectedStatus: 'active',
            status: "",
            taskTitle: "",
            taskDate: "",
            pid: "",
            disable: true
        }
    }
    priorityFilter = (e) => {
        let priority = e.target.value
        let pid = priority == "High" ? 1 : priority == "Medium" ? 2 : 3
        this.setState({ pid: pid })
        console.log(this.state.status)

    }

    changeStatus = (item) => {
        let i = this.state.todoData.findIndex(task => task == item)

        let status = this.state.todoData[i].status
        console.log(status)
        if (status == "active") {
            this.state.todoData[i].status = "deactivate"
            this.setState({
                todoData: [...this.state.todoData]
            })
            console.log(this.state.todoData.length)
        }
        else {
            this.state.todoData[i].status = "active"
            this.setState({
                todoData: [...this.state.todoData]
            })
            console.log(this.state.todoData.length)
        }
        console.log(this.state.todoData.length)
    }

    add = (e) => {
        e.preventDefault();
        const obj = { title: this.state.taskTitle, date: this.state.taskDate, pid: this.state.pid, status: this.state.status }
        this.setState({
            todoData: [...this.state.todoData, obj]
        })

    }

    render() {
        return <div className="container" >
            <div className="mt-3 mb-3 border text-center bg-light"><h1>Todo Task</h1></div>
            <div className="row mt-4">

                <div className="col md-6">
                    <input className="form-control" placeholder="Task Title" onChange={(e) => this.setState({ taskTitle: e.target.value })}></input>
                </div>
                <div className="col md-6">
                    <input className="form-control" placeholder="Date here" onChange={(e) => this.setState({ taskDate: e.target.value })}></input>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col md-6">
                    <select placeholder="setect priority" className="form-control" onChange={this.priorityFilter}>{this.state.priorityList.map((list) => {
                        return <option value={list}>{list}</option>
                    })}</select>
                </div>
                <div className="col md-6">
                    <select className="form-control" onChange={(e) => this.setState({ status: e.target.value })}>
                        <option value='active'>Select status</option>
                        <option value='active'>Activate</option>
                        <option value='deactivate'>Deactivated</option>
                    </select>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-success mt-4" onClick={this.add}>Add Task</button>
            </div>

            <div>
                <button onClick={() => this.setState({ selectedStatus: 'active' })} className="btn btn-outline-primary mt-4" >Activate:{this.state.todoData.filter((obj) => obj.status == "active").length}</button>
                <button onClick={() => this.setState({ selectedStatus: 'deactivate' })} className="btn btn-outline-danger mt-4 mx-3">Deactivated:{this.state.todoData.filter((obj) => obj.status == "deactivate").length}</button>
            </div>

            <hr />
            <div className="row mt-4">
                <table className="table-responsive">
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th>Title</th>
                            <th>Data</th>
                            <th>Priority</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todoData.filter(task => task.status == this.state.selectedStatus)
                            .sort((a, b) => a.pid - b.pid).map((item, index) => {
                                return (
                                    <tr className={item.pid == 1 ? "bg-danger" : item.pid == 2 ? "bg-warning" : "bg-success"}>
                                        <td >{index + 1}</td>
                                        <td >{item.title}</td>
                                        <td >{item.date}</td>
                                        <td >{item.pid == 1 ? "High" : item.pid == 2 ? "Medium" : "Low"}</td>
                                        <td > <button className='btn btn-info' onClick={() => this.changeStatus(item)}> {item.status == "active" ? "Deactive" : "active"} </button></td>
                                    </tr>
                                )
                            })}
                    </tbody>

                </table>
            </div>
        </div>
    }
}