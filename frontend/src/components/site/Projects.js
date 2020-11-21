import React from 'react';
import {  connect } from 'react-redux';
import { fetchProject } from '../../actions/projects'


class Projects extends React.Component{
    componentDidMount(){
        this.props.fetchProject()
    }
    render(){
        const {projects }=this.props
        return(
            <section id="projects" >
                <div className="container">
                    <h1 className="heading-sm">Below are my projects</h1>
                    <div className="gridp">
                    {
                        projects.map(project => (
                            <div key={project.id}>
                                <img src={`${project.image}`} alt="landing page" />
                                <h1>{project.title}</h1>
                                <p>{project.content}</p>
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
    projects:state.projects.projects
})
export default connect(mapStateToProps,{fetchProject})(Projects);