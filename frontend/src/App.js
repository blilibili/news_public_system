import React, { Component } from 'react';
import {Router , Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Header from './component/common/header'
import NewsIndex from './component/news/index'
import Login from './component/login/login'
import AdminIndex from './component/admin/index'
import NewsPublic from './component/admin/public'
import AllNews from './component/admin/allnews'
import EditNews from './component/admin/editNews'
import AdvertisePublic from './component/advertise/add'
//reload页面
import Reload from './component/common/reload'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Button from 'antd/lib/button';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
              <div>
                  <Header />
                  <div>
                      <Route path="/news" component={NewsIndex} />
                      <Route path="/login" component={Login} />
                      <Route path="/admin/index" component={AdminIndex} />
                      <Route path="/admin/news/public" component={NewsPublic} />
                      <Route path="/admin/news/all" component={AllNews} />
                      <Route path="/admin/news/edit/:id" component={EditNews} />
                      <Route path="/admin/adver/public" component={AdvertisePublic} />
                      <Route path="/news/reload" component={Reload} />
                  </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
