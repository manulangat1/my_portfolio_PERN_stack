import axios from 'axios';
import {FETCH_PROJECTS }  from './types'


export const fetchProject = () => dispatch => {
    axios.get('/project')
        .then(res => {
            dispatch({
                type:FETCH_PROJECTS,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}