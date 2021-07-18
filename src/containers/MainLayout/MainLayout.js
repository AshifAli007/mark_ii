import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Events from '../Events/Events';
class Main extends Component {
    render() {
        return (
            <div>
                <Link to="/events">Events</Link>
                <Route path="/events" component={Events}/>
            </div>
                        
        );
    }
}

export default Main;