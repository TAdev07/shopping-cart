import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import {configureApp} from './configureApp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';
import './App.css';

axios.defaults.baseURL = configureApp.api.baseUrl;
axios.defaults.timeout = configureApp.api.timeout;

class App extends Component {
  showContentMenus = (routes) => {
    let result = null;
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          component={route.main}
          exact={route.exact}
        />
      );
    });
    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <main id="mainContainer">{this.showContentMenus(routes)}</main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
