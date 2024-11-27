import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    pickupDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your car booking is confirmed.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Car</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="pickupDate"
        value={formData.pickupDate}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="returnDate"
        value={formData.returnDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
