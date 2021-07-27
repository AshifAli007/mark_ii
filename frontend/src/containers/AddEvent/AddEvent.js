import React from 'react';
import axios from 'axios';
class AddEvent extends React.Component {
    state = {
        eventDetails:{
            name: '',
            description:'',
            endTime:'2021-07-30T15:30',
            
        }
    }
    handle = (e)=> {
        const newEventDetails = {...this.state.eventDetails};
        newEventDetails[e.target.id] = e.target.value;
        this.setState({eventDetails: newEventDetails});
        console.log(newEventDetails);
    }
    submit = (e) =>{
        let url = 'http://localhost:8000/v1/eventService/addEvent';
        e.preventDefault();
        axios.post(url,{
            eventDetails:[{
                ...this.state.eventDetails,
            }]
            
        }).then(res=>{
            console.log(res,Date.now());
        })
        console.log(this.state.eventDetails);
    }
    render(){

    
    return(
        <div>
            <form onSubmit={(e)=>this.submit(e)}>
                <input type="text" onChange={(e)=>this.handle(e)} id='name' value={this.state.eventDetails.name} placeholder="Event name" name="hello"/>
                <input type="text" onChange={(e)=>this.handle(e)} id='description' value={this.state.eventDetails.description} placeholder="Description"/>
                <input type="datetime-local" onChange={(e)=>this.handle(e)} id='endTime' value={this.state.eventDetails.endTime} placeholder="End Time"/>
                <button type="submit">Submit</button>
            </form>
            <h1>This is the add event form</h1>
        </div>
    )
    }
}

export default AddEvent;