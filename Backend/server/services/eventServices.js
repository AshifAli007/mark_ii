const models = require('../../models');
const mongoose = require('mongoose');


const addEvent = (eventDetails)=>{
    return new Promise(async (resolve, reject)=>{
        try{
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

const deleteEvents = (_id)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            console.log('inside delete events');
            let event = await model.event.deleteOne(
                {_id},
            )
            resolve(event+"Deleted Successfully");
        }catch(err){
            reject(err);
        }
    })
};

module.exports ={
    addEvent,
    getEvents,
    deleteEvents,
}