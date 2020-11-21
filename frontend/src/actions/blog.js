import { FETCH_BLOG,FETCH_BLOG_BY_SLUG } from './types';
import axios from 'axios';


export const fetchBlogs =  () => (dispatch) => {
    axios.get('/blog')
        .then( res=> {
            dispatch({
                type:FETCH_BLOG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchBlogsbySlug =  (slug) => (dispatch) => {
    console.log(slug)
    axios.get(`/blog/${slug}`)
        .then( res=> {
            dispatch({
                type:FETCH_BLOG_BY_SLUG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}