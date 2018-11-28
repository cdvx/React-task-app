import React from 'react';

const Task = (props) => {
    return (
        <React.Fragment>
            <span style={{display:'inline', float:'left'}}>
                {props.task.task}
            </span>
            
        </React.Fragment>
    );
}
 
export default Task;