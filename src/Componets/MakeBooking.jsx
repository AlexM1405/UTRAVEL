import  { useState, useEffect } from 'react';

const BookingComponent = () => {
 const [bookingData, setBookingData] = useState("");

 useEffect(() => {
   const fetchBookingData = async () => {
     try {
       const res = await fetch("http://localhost:4888/Booking",{
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(bookingData),
       })

       const data = await res.json();
       setBookingData(data);
       if (!res.ok) alert(result.message);
     } catch (error) {
       console.error(error);
     }
   };

   fetchBookingData();
 }, []);

 return (
    <div>
      {bookingData && <div>{JSON.stringify(bookingData)}</div>}
    </div>
  );
 };
 
 export default BookingComponent;