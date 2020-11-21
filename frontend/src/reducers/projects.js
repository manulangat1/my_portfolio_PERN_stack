import { FETCH_PROJECTS } from '../actions/types';


const intialState={
    projects:[]
}

export default function(state=intialState,action){
    switch(action.type){
        case FETCH_PROJECTS:
            return{
                ...state,
                projects:action.payload
            }
        default:
            return state
    }
}