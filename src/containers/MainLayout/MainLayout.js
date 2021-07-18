import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Events from '../Events/Events';
import EventDetails from '../../components/EventDetails/EventDetails';
class Main extends Component {
    render() {
        return (
            <div>
                <Link to="/events">Events</Link>
                <i className="fa fa-twitter"></i>
                <Switch>
                    <Route path="/events" exact component={Events}/>
                    <Route path="/events/:eventName" component={EventDetails}/>
                </Switch>

            </div>
                        
        );
    }
}

export default Main;