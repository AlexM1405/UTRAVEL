import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import "./Booking.css";
import { AuthContext } from '../DATA/Auth';
import BookingComponent from './MakeBooking.jsx';

function Booking() {
 const { id } = useParams();
 const [tour, setTour] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [showBookingComponent, setShowBookingComponent] = useState(false);

 const {user} = useContext(AuthContext)

 const [Booking, setBooking ] = useState({
  userID: user && user._id,
  userEmail: user && user.email,
  fullname: "",
  phone: "",
  bookat: "",
  guest: "",
 });
 
 const handleChange = (event) => {
  setBooking((prev) => ({ ...prev, [event.target.id]: event.target.value }));
};

const handleClick = (event) => {
  event.preventDefault();
  setShowBookingComponent(true);
}

 useEffect(() => {
   setLoading(true);
   setError(null);
   fetch('http://localhost:4888/Tours')
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       const foundTour = data.find(tour => tour.id === id);
       if (foundTour) {
         setTour(foundTour);
       } else {
         setTour(null);
       }
     })
     .catch(error => {
       setError(error);
     })
     .finally(() => {
       setLoading(false);
     });
 }, [id]);

 if (loading) {
   return <div>Loading...</div>;
 }

 if (error) {
   return <div>Error: {error.message}</div>;
 }
 const serviceFee = 500;
 const TotalAmount = 
  Number(tour.price) + Number(serviceFee)




 return (
   <div className="booking">
     <h2>Booking</h2>
     <h3>
       ${tour.price}/per person 
     </h3> 
     <div className='Booking_form'>
       <h5>Information</h5>
       <form onSubmit={handleClick}>
         <input
           type="text"
           placeholder="Full Name"
           id="FullName"
           required
           onChange={handleChange}
         />
         <input
           type="number"
           placeholder="Phone"
           id="Phone"
           required
           onChange={handleChange}
         />
         <input
           type="date"
           placeholder=""
           id="BookAt"
           required
           onChange={handleChange}
         />
         <input
           type="number"
           placeholder="Guest"
           id="Guest"
           required
           onChange={handleChange}
         />
       </form>
       <div className='Booking_bottom'>
         <h5> Services Charged</h5>
         <span>${serviceFee} </span>
         <h4>Total</h4>
         <span>${TotalAmount}</span>
         <input type="submit" value="Reserve" onClick={ handleClick} />
         {showBookingComponent && <BookingComponent />}
       </div>
     </div>
   </div>
 )
}

export default Booking;
