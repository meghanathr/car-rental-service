import React from 'react';
import Header from './components/header';
import CarList from './components/carlist';
import BookingForm from './components/bookingform';

const App = () => {
  return (
    <div>
      <Header />
      <BookingForm />
      <CarList />
    </div>
  );
};

export default App;



