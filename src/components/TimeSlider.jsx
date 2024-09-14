import React from 'react';
import styled from 'styled-components';

const TimeSlider = ({ selectedTime, setSelectedTime }) => {
  // Convert current time to the total number of minutes since 00:00
  const timeInMinutes = selectedTime.getHours() * 60 + selectedTime.getMinutes();

  // Update time based on slider value (minutes from midnight)
  const handleSliderChange = (event) => {
    const newTimeInMinutes = Number(event.target.value);
    const hours = Math.floor(newTimeInMinutes / 60);
    const minutes = newTimeInMinutes % 60;

    // Create a new Date object to avoid modifying the original one
    const newTime = new Date(selectedTime);
    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    newTime.setSeconds(0); // Reset seconds to 0 for cleaner changes

    setSelectedTime(newTime); // Update the time without changing the date
  };

  // Function to format time for display (e.g., 13:05 becomes "1:05 PM")
  const formatTime = (hours, minutes) => {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${period}`;
  };

  return (
    <SliderContainer>
      {/* Label for local time */}
      <Label>Local Time</Label>

      {/* Display the selected time in human-readable format */}
      <TimeDisplay>{formatTime(selectedTime.getHours(), selectedTime.getMinutes())}</TimeDisplay>

      {/* Slider for selecting time (0 to 1439 minutes = 24 hours) */}
      <SliderWrapper>
        <Slider
          type="range"
          min="0"
          max="1439"
          step="1"
          value={timeInMinutes}
          onChange={handleSliderChange}
        />
        {/* Numeric labels for key time intervals */}
        <Labels>
          {Array.from({ length: 24 }).map((_, index) => {
            const hour = index % 12 || 12; // Convert 24-hour to 12-hour format
            const position = (index / 23) * 100; // Position percentage for each label
            return (
              <LabelKey key={index} style={{ left: `${position}%` }}>
                {hour}
              </LabelKey>
            );
          })}
        </Labels>
        {/* Hour markers */}
        <HourMarkers>
          {Array.from({ length: 24 }).map((_, index) => (
            <Marker key={index} style={{ left: `${(index / 23) * 100}%` }} />
          ))}
        </HourMarkers>
        {/* Slider cutter (visual indicator) */}
        <Cutter style={{ left: `${(timeInMinutes / 1439) * 100}%` }} />
      </SliderWrapper>
    </SliderContainer>
  );
};

// Styled components for slider and time display
const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const TimeDisplay = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 80%;
`;

const Slider = styled.input`
  -webkit-appearance: none; /* Remove default styling in WebKit browsers */
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #d3d3d3 ${props => props.value / 1439 * 100}%, #f5f5f5 ${props => props.value / 1439 * 100}%); /* Light grey colors */
  border-radius: 5px;
  outline: none;
  margin-top: 10px;
  position: relative;
  z-index: 1; /* Ensure slider is above labels and cutters */

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d3d3d3; /* Light grey */
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2; /* Ensure thumb is above labels and cutters */
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d3d3d3; /* Light grey */
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2; /* Ensure thumb is above labels and cutters */
  }
`;

const Labels = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  color: #333;
  pointer-events: none; /* Ensure labels do not interfere with slider interaction */
`;

const LabelKey = styled.div`
  position: absolute;
  transform: translateX(-50%);
`;

const HourMarkers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none; /* Ensure markers do not interfere with slider interaction */
`;

const Marker = styled.div`
  position: absolute;
  width: 1px;
  height: 24px;
  background: #888; /* Light grey marker color */
  transform: translateX(-50%);
`;

const Cutter = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 24px;
  background: #888; /* Light grey cutter color */
  transform: translateX(-50%);
  pointer-events: none; /* Ensure cutter does not interfere with slider interaction */
`;

export default TimeSlider;
