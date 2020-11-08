import './styles/main.scss';
import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/site/Home'
import About from './components/site/About'
import Contact from './components/site/Contact'

import { HashRouter as Router,Route, Switch } from 'react-router-dom' 


import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <section>
        <Router>
            <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </main>
            
            <Footer />
            </Router>
    </section>
      </Provider>
    )
  }
}
export default App;
