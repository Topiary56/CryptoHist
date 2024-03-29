import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Shoppinglist from './components/Shoppinglist';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <p />
            <Shoppinglist />
          </Container>
        </div>
      </Provider>
    );
  }
}
/*class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <p />
            <Shoppinglist />
          </Container>
        </div>
      </Provider>
    );
  }
}*/

export default App;
