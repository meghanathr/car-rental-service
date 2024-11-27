import React from 'react';

const cars = [
  { id: 1, name: 'Toyota Corolla', price: '$40/day' },
  { id: 2, name: 'Honda Civic', price: '$50/day' },
  { id: 3, name: 'Ford Focus', price: '$45/day' },
];

const CarList = () => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name} - {car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
