import React, { Component } from 'react';
import NotFound from './NotFound';
import Search from './Search';
import Form from './Form';
import Nav from './Nav';



import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

class App extends Component {

    render() {
      return (
        
          <div className="container">
            <BrowserRouter>

              <Route path="/" component={Form} />
              <Nav />

              <Switch>
                { /* REDIRECT FROM HOME */ }
                <Route exact path="/" render={ () => <Redirect to="/results" /> } />

                { /* SEARCH ROUTE */ }
                <Route exact path="/results" component={Search}/>
                <Route path="/results/:search" component={Search}/>

                { /* 404 */ }
                <Route component={NotFound} />
              </Switch>

            </BrowserRouter>

            
          </div>
        
      )
    }
}

export default App;