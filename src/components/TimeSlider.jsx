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
          {Array.from({ length: 25 }).map((_, index) => {
            const hour = index % 12 || 12; // Convert 24-hour to 12-hour format
            const position = (index / 24) * 100; // Position percentage for each label
            return (
              <LabelKey key={index} style={{ left: `${position}%` }}>
                {hour}
              </LabelKey>
            );
          })}
        </Labels>
        {/* Hour markers */}
        <HourMarkers>
          {Array.from({ length: 25 }).map((_, index) => (
            <Marker key={index} style={{ left: `${(index / 24) * 100}%` }} />
          ))}
        </HourMarkers>
        {/* Slider cutter */}
        <Cutter style={{ left: `${(timeInMinutes / 1439) * 100}%` }} />
      </SliderWrapper>
    </SliderContainer>
  );
};


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
  -webkit-appearance: none; 
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #d3d3d3 ${props => props.value / 1439 * 100}%, #f5f5f5 ${props => props.value / 1439 * 100}%); 
  border-radius: 5px;
  outline: none;
  margin-top: 10px;
  position: relative;
  z-index: 1; 

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d3d3d3; 
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2; 
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d3d3d3; 
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2; 
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
  pointer-events: none; 
`;

const LabelKey = styled.div`
  position: absolute;
  transform: translateX(-50%);
`;

const HourMarkers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none; 
`;

const Marker = styled.div`
  position: absolute;
  width: 1px;
  height: 24px;
  background: #888; 
  transform: translateX(-50%);
`;

const Cutter = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 24px;
  background: #888; 
  transform: translateX(-50%);
  pointer-events: none; 
`;

export default TimeSlider;
