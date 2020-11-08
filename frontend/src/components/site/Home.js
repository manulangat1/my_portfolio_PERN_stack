import React from 'react';
import { fetchHome } from '../../actions/home';
import { connect } from 'react-redux';

class Home extends React.Component{
    componentDidMount(){
        this.props.fetchHome()
    }
    render(){
        return(
            <section>
                <div className="container">
                <h1>Home</h1>
                </div>
                
            </section>

        );
    };
};
const mapStateToProps = state => ({
    home:state.home.homes
})
export  default connect(mapStateToProps,{fetchHome}) (Home);