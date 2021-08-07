import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (error) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        error: error
    }
}

export const authFail = (authData) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        authData: authData,
    }
}

export const auth = (email, password) =>{
    return dispatch=>{
        dispatch(authStart());
    }
}