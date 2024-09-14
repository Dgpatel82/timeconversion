import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const TimezoneInfo = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const TimezoneItem = styled.div`
  margin-bottom: 10px;
`;

const ConverterContainer = styled.div`
  margin-top: 30px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const AboutTimeZone = () => {
  const [timeInUTC, setTimeInUTC] = useState('');
  const [convertedTime, setConvertedTime] = useState('');

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setTimeInUTC(time);
  };

  const convertTime = () => {
    // For demonstration, we'll convert time from UTC to New York Time (GMT-4) as an example.
    const hours = parseInt(timeInUTC.split(':')[0]);
    const minutes = timeInUTC.split(':')[1];
    const newYorkTime = ((hours - 4 + 24) % 24) + ':' + minutes;
    setConvertedTime(`New York Time (GMT-4): ${newYorkTime}`);
  };

  return (
    <PageContainer>
      <Title>About Time Zones</Title>

      <TimezoneInfo>
        <TimezoneItem>
          <strong>UTC (Coordinated Universal Time):</strong> The time standard commonly used across the world.
        </TimezoneItem>
        <TimezoneItem>
          <strong>GMT (Greenwich Mean Time):</strong> UTC+0 time zone, no offset.
        </TimezoneItem>
        <TimezoneItem>
          <strong>EST (Eastern Standard Time):</strong> UTC-5, used in New York, Washington D.C., and other Eastern cities.
        </TimezoneItem>
        <TimezoneItem>
          <strong>PST (Pacific Standard Time):</strong> UTC-8, used in Los Angeles, San Francisco, and other Pacific regions.
        </TimezoneItem>
        <TimezoneItem>
          <strong>IST (Indian Standard Time):</strong> UTC+5:30, used in India.
        </TimezoneItem>
      </TimezoneInfo>

      <ConverterContainer>
        <h2>Convert UTC Time to New York Time (GMT-4)</h2>
        <Input
          type="time"
          value={timeInUTC}
          onChange={handleTimeChange}
        />
        <button onClick={convertTime}>Convert Time</button>

        {convertedTime && <p>{convertedTime}</p>}
      </ConverterContainer>
    </PageContainer>
  );
};

export default AboutTimeZone;
