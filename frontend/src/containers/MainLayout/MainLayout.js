import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Events from '../Events/Events';
import EventDetails from '../EventDetails/EventDetails';
import AddEvent from '../AddEvent/AddEvent';
class Main extends Component {
    render() {
        return (
            <div>
                <Link to="/events">Events</Link>
                <Link to="/addEvent">Add Events1</Link>
                <i className="fa fa-twitter"></i>
                <Switch>
                    <Route path="/events" exact component={Events}/>
                    <Route path="/event/:id" component={EventDetails}/>
                    <Route path="/addEvent" component={AddEvent}/>
                </Switch>

            </div>
                        
        );
    }
}

export default Main;