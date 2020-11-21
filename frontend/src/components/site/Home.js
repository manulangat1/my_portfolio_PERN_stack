import React from 'react';
import { fetchHome } from '../../actions/home';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

class Home extends React.Component{
    componentDidMount(){
        this.props.fetchHome()
    }
    render(){
        return(
            <section id="home">
                <div className="container">
                    {
                       this.props.home && this.props.home.map(h => (
                            <div key={h.id}>
                                <h1>Hi, I am <span className="uname">{h.title}</span> .</h1>
                                <p><Typewriter options={{ strings: ['A Software Engineer . . .', 'A Programmer . . .','A Pythonista . . .','A data scientist . . .'], autoStart: true,loop: true,}}
/></p>

                            </div>
                        ))
                    }
                    <div className="links">
                    <a href="https://github.com/manulangat1" target="_blank" ><i class="fab fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/emmanuel-langat-7b547a158/" target="_blank" ><i class="fab fa-linkedin-in fa-3x"></i></a>
                    
                    </div>
                </div>
                
            </section>

        );
    };
};
const mapStateToProps = state => ({
    home:state.home.home
})
export  default connect(mapStateToProps,{fetchHome}) (Home);