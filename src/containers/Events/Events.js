import React, { Component } from 'react';
import Event from '../../components/Event/Event';
class Events extends Component {
    render() {
        return (
            <div>
              <Event event="Tech War" content="Lol...."></Event>
              <Event event="Tech Charades" content="Lol2"></Event>
            </div>
        );
    }
}

export default Events;