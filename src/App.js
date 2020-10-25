import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderMain from "./Header/HeaderMain";
import HeaderMenu1 from "./Header/HeaderMenu1";
import HeaderMenu2 from "./Header/HeaderMenu2";
import Footer from "./Header/Footer";
import Home from "./Home/Home";
import About from "./Home/About";
import Services from "./Home/Services";
import Contact from "./Home/Contact";
import Fares from "./Fares/Fares";
import Info from "./Info/Info";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

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
         
          <HeaderMain />

          <Switch>

              <Route path="/fares">
                <HeaderMenu2 />
                <Fares />
              </Route>

              <Route path="/info">
                <HeaderMenu2 />
                <Info />
              </Route>
              
              <Route path="/">   
                <HeaderMenu1 />
                <Home />
                <About />
                <Services />
                <Contact />              
              </Route>
          
          </Switch>

          <Footer />

       </Router>
    </div>
  );
}

export default App;
