
import { Link } from "react-router-dom";
import "../styles/Appointment.css";

function Appointment() {
  // Sample doctor data
  const doctors = [
    { name: "ABC", department: "Cardiology (Heart)", rating: 3, img: "doctor1.png" },
    { name: "DEF", department: "Pulmonology (Lungs)", rating: 4, img: "doctor2.png", highlighted: true },
    { name: "CBA", department: "General Medicine", rating: 5, img: "doctor3.png" },
    { name: "FED", department: "Pediatrics", rating: 4, img: "doctor4.png" }
  ];

  return (
    <div className="appointment-container">
      {/* Navbar */}
      <nav className="appointment-navbar">
        <Link to="/" className="logo">🏥 HOSPITALO</Link>
        <input type="text" className="search-bar" placeholder="Search by Doctor/Department" />
        <div className="user-section">User</div>
      </nav>

      {/* Doctor List */}
      <div className="doctor-list">
        {doctors.map((doc, index) => (
          <div key={index} className={`doctor-card ${doc.highlighted ? "highlighted" : ""}`}>
            <img src={`/images/${doc.img}`} alt={doc.name} className="doctor-img" />
            <div className="doctor-info">
              <p><strong>Name:</strong> <input type="text" value={doc.name} readOnly /></p>
              <p><strong>Department:</strong> <input type="text" value={doc.department} readOnly /></p>
              <div className="rating">
                {"⭐".repeat(doc.rating)}
                {"☆".repeat(5 - doc.rating)}
              </div>
            </div>
            <button className="book-btn">Book Appointment</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span>← 1 2 →</span>
      </div>
    </div>
  );
}

export default Appointment;
