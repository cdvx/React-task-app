import React from 'react';

const Task = (props) => {
    return (
        <React.Fragment>
            <span >
                <div style={{marginLeft: "10px", background:"rgba(0, 0, 0, 0.03)", width:"38rem", boxSizing: "borderBox"}}>
                    {props.task.task}
                </div>
            </span>
            
        </React.Fragment>
    );
}
 
export default Task;