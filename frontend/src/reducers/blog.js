import { FETCH_BLOG,FETCH_BLOG_BY_SLUG } from '../actions/types';

const intialState = {
    blogs:[],
    blog:[]
}

export default function(state=intialState,action){
    switch(action.type){
        case FETCH_BLOG:
            return {
                ...state,
                blogs:action.payload
            }
        case FETCH_BLOG_BY_SLUG:
            return {
                ...state,
                blog:action.payload
            }
        default:
            return state
    }
}