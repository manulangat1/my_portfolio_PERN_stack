import {LOGIN_FAIL,LOGIN_USER } from '../actions/types';

const intialState = {
    isAuthenticated:false,
    token:localStorage.getItem('token'),
    user:null
}

export default function(state=intialState,action){
    switch(action.type){
        case LOGIN_USER:
            localStorage.setItem('token',action.payload.data.token)
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.data.user,
                token:action.payload.data.token
            }
        case LOGIN_FAIL:
            return {
                isAuthenticated:false,
                // token:localStorage.getItem('token'),
                user:null
            }
        default:
            return state
    }
}