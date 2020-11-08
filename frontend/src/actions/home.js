import axios from 'axios';
import { FETCH_HOME } from './types' 


export const fetchHome = () => async(dispatch)  => {
    try{
        const response = await axios.get('/api/')
        dispatch({
            type:FETCH_HOME,
            payload:response.data
        })
    } catch(err){
        console.log(err)
    }
}