import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import HeaderNav from "./Header/HeaderNav";
import Footer from "./Header/Footer";
import Home from "./Header/Home";
import About from "./About/About";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

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
        <Header />
        <HeaderNav />
          <Switch>
            <Route path ='/booking'>
              <h1>Booking</h1>
            </Route>
            <Route path='/products'> 
              <h1>Products</h1>
            </Route>
            <Route path='/fares'>
              <h1>Fares</h1>
            </Route>
            <Route path="/about">
              <About />
            </Route>
                  
            <Route path="/">   
              <Home />
            </Route>
            
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
