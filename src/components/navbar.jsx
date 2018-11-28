import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light" style={{width: '60%', margin:'0 25% 0 15%' }}>
                <a className="navbar-brand mb-0 h1" href="#">
                Task Scheduler
                </a>
                <button className="btn btn-primary btn-sm "
                style={{ marginRight:'0'}}
                onClick={this.props.onAdd}>
                add task
                </button>
                
            </nav>

        );
    }
}
 
export default NavBar;