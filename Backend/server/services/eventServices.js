const models = require('../../models');
const mongoose = require('mongoose');


const addEvent = (eventDetails)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            console.log("hello function");
            await models.event.insertMany(eventDetails);
            return resolve(eventDetails + "Added Successfully");
        }
        catch (err) {
            console.log(err);
            reject({ code:422, message: err.message });
        }
    })
}

const getEvents = ()=>{
    return new Promise(async (resolve, reject)=>{
        try{
            console.log("get event functions");
            let events = models.event.find();
            resolve(events);
        }catch(err){
            console.log(err);
            reject({ code:401, message: err.message });
        }
        
    })
}


module.exports ={
    addEvent,
    getEvents,
}