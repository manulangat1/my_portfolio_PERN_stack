import {LOGIN_FAIL,LOGIN_USER } from './types';
import axios from 'axios';

export const loginUser = ({email,password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const  body = JSON.stringify({email,password})
    console.log(body)
    axios.post('/auth/login',body,config)
        .then( res =>{
            console.log(res.data.data.token)
            dispatch({
                type:LOGIN_USER,
                payload:res.data
            })
        } )
        .catch ( err => {
            console.log(err)
            dispatch({
                type:LOGIN_FAIL,
            })
        })
}
