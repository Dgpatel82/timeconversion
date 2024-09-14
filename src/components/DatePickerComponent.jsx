import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Inline styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    maxWidth: '400px',
    margin: 'auto',
  },
  label: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '10px',
  },
  datePickerWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
  },
  datePicker: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    
  },
  icon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#333',
    pointerEvents: 'none', // Make sure the icon does not interfere with date picking
  },
};

// Custom input component with embedded icon
const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div style={styles.datePickerWrapper}>
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      style={styles.datePicker}
      readOnly
    />
    <i className="fas fa-calendar-alt" style={styles.icon}></i>
  </div>
));

function DatePickerComponent({ selectedTime, setSelectedTime }) {
  return (
    <div style={styles.container}>
      <h4 style={styles.label}>Choose Date:</h4>
      <DatePicker
        selected={selectedTime}
        onChange={(date) => setSelectedTime(date)}
        customInput={<CustomInput />}
      />
    </div>
  );
}

export default DatePickerComponent;
