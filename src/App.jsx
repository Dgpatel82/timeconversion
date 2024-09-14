import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimezoneList from './components/TimezoneList';
import TimeSlider from './components/TimeSlider';
import DatePickerComponent from './components/DatePickerComponent';
import DarkModeToggle from './components/DarkModeToggle';
import TimezoneSelector from './components/TimeZoneSelector';
import GenerateLink from './components/GenerateLink';
import GoogleMeetScheduler from './components/GoogleMeetScheduler';
import AboutTimeZone from './components/AboutTimeZone';
import AboutUs from './components/Aboutus';
import Header from './components/Header';
import './App.css';

function App() {
  const [timezones, setTimezones] = useState([]);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Header />
        <div className="container">
          {/* <div className="centered-content">
            <h2>Welcome to the TimeZone Converter</h2>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div> */}
          <Routes>
            <Route
              path='/'
              element={
                <>
                <div className="centered-content"> 
                  <h1>Welcome to the TimeZone Converter </h1>
                  
                </div>
                  <div className="component-wrapper">
                    <DatePickerComponent selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                  </div>
                  <div className="component-wrapper">
                    <TimeSlider selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                  </div>
                  <div className="component-wrapper">
                    <TimezoneSelector timezones={timezones} setTimezones={setTimezones} />
                  </div>
                  <div className="component-wrapper">
                    <TimezoneList timezones={timezones} selectedTime={selectedTime} setTimezones={setTimezones} />
                  </div>
                  <div className="component-wrapper">
                    <GenerateLink timezones={timezones} selectedTime={selectedTime} />
                  </div>
                  <div className="component-wrapper">
                    <GoogleMeetScheduler selectedTime={selectedTime} />
                  </div>
                </>
              }
            />
            <Route path="/about-timezone" element={<AboutTimeZone />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
