import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
// import Resume from "./Resume";
// import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';



function App() {
  const [{RTC}, dispatch] = useStateValue();

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
      <Header />
      <Home />
      <About />
      <Services />


      {/* <Home />
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} /> */}
    </div>
  );
}

export default App;
