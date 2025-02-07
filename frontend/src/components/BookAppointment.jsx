// src/components/BookAppointment.jsx


function BookAppointment() {
  return (
    <div>
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="date" required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookAppointment;
