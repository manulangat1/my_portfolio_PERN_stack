import React from 'react';
import { connect } from 'react-redux';
import {  fetchAbout } from '../../actions/about'


class About extends React.Component{
    componentDidMount(){
        this.props.fetchAbout()
    }
    render(){
        return(
            <section id="home">
                <div className="container">
                {
                    this.props.about.map(ab => (
                        <div>
                            <h1>{ab.title}</h1>
                            <p>{ab.content}</p>
                        </div>
                    ))
                }
                </div>
                
            </section>

        )
    }
}
const mapStateToProps = state => ({
    about:state.about.about
})
export default  connect(mapStateToProps,{fetchAbout})(About);