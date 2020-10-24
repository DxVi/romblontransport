import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import Fares from "./Fares";
import Info from "./Info";

import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const [,dispatch] = useStateValue();

  useEffect(() => {
    $.ajax({
      url: "/RTCData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        dispatch({ 
          type: actionTypes.SET_RTC,
          RTC: data
      })
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }, [dispatch])

  return (
    <div className="app">
      <Router>
       
        <Switch>
          <Route path="/fares">
              <div className="app_page">
                <Header2 />
                <Fares />
              </div>
          </Route>
          <Route path="/info">
              <div className="app_page">
                <Header2 />
                <Info />
              </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Header />
              <Home />
              <About />
              <Services />
              <Contact />
            </div>  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
