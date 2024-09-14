import React, { useState } from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';

// Get all available timezones from moment-timezone
const availableTimezones = moment.tz.names().map((tz) => ({
  value: tz,
  label: `${tz} - ${moment.tz(tz).format('zz')}`, // Include the timezone abbreviation
}));

function TimezoneSelector({ timezones, setTimezones }) {
  const [selectedTimezone, setSelectedTimezone] = useState(availableTimezones[0].value);

  const handleAddTimezone = () => {
    if (selectedTimezone) {
      const newTimezone = availableTimezones.find((tz) => tz.value === selectedTimezone);
      if (newTimezone && !timezones.some((tz) => tz.value === newTimezone.value)) {
        setTimezones([...timezones, newTimezone]);
      }
    }
  };

  return (
    <Container>
      <Select
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        {availableTimezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </Select>
      <AddButton onClick={handleAddTimezone}>Add Timezone</AddButton>
    </Container>
  );
}

// Styled components for the timezone selector
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px; /* Increased margin-top to create more space */
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 10px; /* Margin bottom for spacing between select and button */

  &:focus {
    border-color: #61dafb;
    outline: none;
    box-shadow: 0 0 8px rgba(97, 218, 251, 0.5);
  }
`;

const AddButton = styled.button`
  background: lightgrey;
  color: black;
  border: none;
  font-weight:bold;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: darkgrey;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: #3b8dbd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default TimezoneSelector;
