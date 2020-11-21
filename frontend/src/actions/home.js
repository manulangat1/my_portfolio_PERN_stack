import axios from 'axios';
import { FETCH_HOME } from './types' 


export const fetchHome = () => async(dispatch)  => {
    try{
        axios.get('/api/')
            .then ( res => {
                dispatch({
                    type:FETCH_HOME,
                    payload:res.data.data
                })
            })
            .catch(err => console.log(err))
    } catch(err){
        console.log(err)
    }
}