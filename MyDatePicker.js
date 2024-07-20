import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import './MyDatePicker.css';
const MyDatePicker = () => {
  // Initialize state for the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date change
  const handleDateChange = (date1) => {
    setSelectedDate(date1);
  };

  return (
    <div className='container'>
      <h1>Date Picker Component</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="d- MMMM - yyyy"
        placeholderText="Select a date"
      />
      {selectedDate && (
        <div className='one'>
         <h2> <p>Selected Date: {format(selectedDate, 'd- MMMM - yyyy')}</p></h2>
        </div>
      )}
    </div>
  );
};

export default MyDatePicker;
