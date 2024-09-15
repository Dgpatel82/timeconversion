import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimezoneList from './components/TimezoneList';
import TimeSlider from './components/TimeSlider';
import DatePickerComponent from './components/DatePickerComponent';
import TimezoneSelector from './components/TimeZoneSelector';
import GenerateLink from './components/GenerateLink';
import AboutTimeZone from './components/AboutTimeZone';
import GoogleMeetScheduler from './components/GoogleMeetScheduler';
import AboutUs from './components/Aboutus';
import Header from './components/Header';
import './App.css';

function App() {
  const [timezones, setTimezones] = useState([]);
  const [selectedTime, setSelectedTime] = useState(new Date());

  // Parse URL parameters on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const timezonesParam = params.get('timezones');
    const timeParam = params.get('time');

    if (timezonesParam && timeParam) {
      const parsedTimezones = timezonesParam.split(',').map(tz => ({
        label: tz, 
        value: tz
      }));
      const parsedTime = new Date(timeParam);

      setTimezones(parsedTimezones);
      setSelectedTime(parsedTime);
    } else {
      // Default timezones (IST and UTC)
      setTimezones([
        { label: 'Indian Standard Time', value: 'Asia/Kolkata' },
        { label: 'Coordinated Universal Time', value: 'UTC' }
      ]);
    }
  }, []);

  return (
    <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path='/'
              element={
                <>
                <div className="centered-content"> 
                  <h1>Welcome to the TimeZone Converter</h1>
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
    </Router>
  );
}

export default App;
