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
            let events = await models.event.find();
            resolve(events);
        }catch(err){
            console.log(err);
            reject({ code:401, message: err.message });
        }
        
    })
}
const getEvent = (_id)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let event = await models.event.findOne(
                {_id},
            )
            resolve(event);
        }catch(err){
            console.log(err);
            reject({ code:401, message: err.message})
        }
    })

}
const deleteEvents = (_id)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let event = await models.event.deleteOne(
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
    getEvent,
    deleteEvents,
}