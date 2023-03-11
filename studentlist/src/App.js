import {Component} from 'react'
import Currenttime from './component/Currenttime.js';
import Student from './Student';
import Todo from './component/Todo.js'

export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return<>
        {/* <Todo/> */}
        {/* <Task/> */}
        <Student/>
        {/* <Demo/> */}
        {/* <Currenttime/> */}
        </>
    }
}