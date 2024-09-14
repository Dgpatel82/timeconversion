import React from 'react';
import styled from 'styled-components';

const GenerateLink = ({ timezones, selectedTime }) => {
  const generateShareableLink = () => {
    const params = new URLSearchParams();
    params.set('timezones', timezones.map(tz => tz.value).join(','));
    params.set('time', selectedTime.toISOString());
    const link = `${window.location.origin}/?${params.toString()}`;
    window.prompt('Copy this link:', link);
  };

  return (
    <Container>
      <Button onClick={generateShareableLink}>Generate Shareable Link</Button>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
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

  &:focus {
    outline: none;
  }
`;

export default GenerateLink;
