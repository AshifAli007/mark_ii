const eventService = require('../services/eventServices');

const addEvent = (req, res, next)=>{
    let eventDetails =req.body.eventDetails;
    eventService.addEvent(eventDetails).then(data=>{
        res.status(200).json({"success":true,"data":data});
    }).catch(err=>{
        return res.status(err.code).json({"success":false,"message":err.message});
    });
}

const getEvents = (req, res, next)=>{
    eventService.getEvents().then(data=>{
        res.status(200).json({"success":true,"data":data});
    })
}

const deleteEvents = (req,res, next)=>{
    let id = req.params.id;
    eventService.deleteEvents(id).then(data=>{
        res.status(200).json({"success":true,"data":data});
    }).catch(err=>{
        return res.status(err.code).json({"success":false,"message":err.message});
    })
}
module.exports = {
    addEvent,
    getEvents,
    deleteEvents,
}