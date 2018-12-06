import React, { Component } from 'react';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './components/Launches';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h1 style={{ margin: '0 auto', textAlign: 'center' }}>SpaceX</h1>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
