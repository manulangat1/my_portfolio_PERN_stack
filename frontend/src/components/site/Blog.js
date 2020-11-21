import React from 'react';
import ReactMarkdown from "react-markdown";
import moment from 'moment';

import {  connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import { fetchBlogs } from '../../actions/blog';


class Blogs extends React.Component{
    componentDidMount(){
        this.props.fetchBlogs()
    }
    render(){
        const {blogs }=this.props
        return(
            <section id="projects" >
                <div className="container">
                    <h1 className="heading-sm">Learn Javascript</h1>
                    <div className="gridp">
                    {
                        blogs.map(blog => (
                            <div key={blog.id}>

                                <img src={`${blog.image}`} alt=" landing page" />
                                <Link to={`/blog/${blog.slug}`}>
                                <h1>{blog.title}- Posted on : {moment(`${blog.createdAt}`).format("YYYY/MM/DD")}</h1>
                                </Link>
                                <ReactMarkdown source={blog.content} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>

        );
    };
};
const mapStateToProps = state  => ({
    blogs:state.blogs.blogs
})
export default connect(mapStateToProps,{fetchBlogs})(withRouter(Blogs));