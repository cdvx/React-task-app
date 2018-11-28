import React, { Component } from 'react';
import NavBar from './navbar';
import Task from './task';

function newTask(task, state){
    this.task = {id: state.tasks.length + 1, task };
    return this.task;
}

class Tasks extends Component {
    state = { 
        tasks:[{id: 1, task: "do this and that"}] 
    };
    

    addTask =()=>{
        const task = document.getElementById('in').value;
        const task_ = new newTask(task, this.state);
        const tasks = [...this.state.tasks];
        task_.id = tasks.length + 1;
        tasks.push(task_);
        
        this.setState({ tasks });
        console.log("task add fini2>>> ", task, this.state.tasks);
    }

    deleteTask = id =>{
        const tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks });
        console.log('delete', tasks ,'<<>>',this.state.tasks)
    }

    editTask = id =>{
        const input = document.getElementById('in').value;
        const tasks = [...this.state.tasks];
        const task_ = tasks.filter( c => c.id === id );
        task_.task = input
        this.setState({ Tasks })

    }

    // handleInput = (data) =>{

    // }

    renderTasks = () => {
        document.createElement('li');
        return (this.state.tasks.map(task => (
            <React.Fragment >
                <Task 
                key={task.id}
                task={task}
                onDelete={()=>this.deleteTask}
                />
                <div style={{display:'inline', float:'right'}}  >
                    <button className="btn btn-danger btn-sm m-2"
                    onClick={()=>this.deleteTask(task.id)}
                    >
                    Delete</button>
                    <button className="btn btn-info btn-sm m-2"
                    onClick={()=> this.editTask(task.id)}
                    >
                    Edit</button>
                </div>
            </React.Fragment>
        )))}


    render() { 
        return (
            <div className="card" style={{width: "40rem", margin:"0 60% 0 25%"}}>
                <div className="card-header">
                    <NavBar 
                    onAdd={()=> this.addTask()}
                    />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Write task</span>
                    </div>
                    <input id="in" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <ul className="list-group list-group-flush">
                    {this.renderTasks()}
                    
                </ul>
            </div>
                
        );
    }
}
 
export default Tasks