import React, { Component } from 'react';
import Event from '../../components/Event/Event';
import styles from  './Events.module.css';
import axios from 'axios';
class Events extends Component {
    state ={
        events: [],
        selectedEvent: null,
    }
    componentDidMount(){
        axios.get('http://localhost:8000/v1/eventService/getEvents')
                .then(res=>{
                    console.log(res.data.data);
                    const events = res.data.data;
                    this.setState({events: events});

                });
    }
    render() {
        const post = this.state.events.map(event=>{
            return <Event 
            key={event._id} 
            event = {event.name} 
            content = {event.brief} 
            timeToLive = {100}   
            />
        });
        return (
            <div className={"row justify-content-start "+ styles.row}>
                        {post}
                </div>
        );
    }
}
export default Events;