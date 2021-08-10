require('dotenv').config();

const models = require('../../models');
const mongoose = require('mongoose');
const logger = require('../../config/logger');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const addUser = (userDetails) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const salt = await bcryptjs.genSalt()
            const hashedPassword = await bcryptjs.hash(userDetails.password, salt);
            const user = {
                ...userDetails,
                password: hashedPassword,
            }
            logger.debug(user);
            await models.user.create(user);
            return resolve({'user': user,'status':'successfully added to mongo'});

        }catch(err){
            logger.error(err);
            reject({ code:422, message: err.message });
        }
    });
}

const login = (userDetails) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            logger.info(process.env.ACCESS_TOKEN_SECRET);
            const user = await models.user.findOne({username: userDetails.username})
            if(user == null){
                return reject({code: 404, message: 'User not found'});
            }
            logger.info(user);
            if(await bcryptjs.compare(userDetails.password, user.password)){
                const accessToken = generateToken(user);
                logger.debug(accessToken);
                const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET);
                return resolve({
                                accessToken: accessToken,
                                refreshToken: refreshToken, 
                                userId: user,
                                expireIn: 3600,
                        });

            }else{
                reject({code: 404, message: 'password does not match'});
            }
        }catch(err) {
            logger.error(err);
            return reject({ code:422, message:err.message});
        }
    })
}
const generateToken = (user) =>{
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3600s"});
}

module.exports = {
    addUser,
    login,

}