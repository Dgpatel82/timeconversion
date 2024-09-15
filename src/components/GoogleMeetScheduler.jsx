import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function GoogleMeetScheduler({ selectedTime }) {
  const [isLoading, setIsLoading] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState(null);

  const scheduleGoogleMeet = async () => {
    setIsLoading(true);
    const startTime = selectedTime.toISOString(); 
    const endTime = new Date(selectedTime.getTime() + 2* 60 * 60 * 1000).toISOString(); // 2-hour meeting

    try {
      const response = await axios.post('http://localhost:5001/schedule', {
        summary: 'Scheduled Meeting via React App',
        startTime,
        endTime,
      });
      setMeetingDetails(response.data);
    } catch (error) {
      console.error('Error scheduling Google Meet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Button onClick={scheduleGoogleMeet} disabled={isLoading}>
        {isLoading ? 'Scheduling...' : 'Schedule Google Meet'}
      </Button>

      {meetingDetails && (
        <MeetingDetails>
          <p>Meeting scheduled successfully!</p>
          <a href={meetingDetails.hangoutLink} target="_blank" rel="noopener noreferrer">
            Join Google Meet
          </a>
        </MeetingDetails>
      )}
    </Container>
  );
}

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #4caf50; /* Soft green background */
  color: #fff; /* White text */
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #45a049; /* Slightly darker green on hover */
  }

  &:active {
    transform: scale(0.98); /* Slightly scale down on click */
  }

  &:disabled {
    background-color: #ccc; /* Light grey background for disabled state */
    cursor: not-allowed;
  }
`;

const MeetingDetails = styled.div`
  margin-top: 20px;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  a {
    color: #1e88e5; /* Google Meet blue color */
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GoogleMeetScheduler;
