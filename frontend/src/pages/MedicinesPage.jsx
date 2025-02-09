import "../styles/MedicinesPage.css"; // Import CSS

// Online capsule icon
const capsuleIcon = "https://cdn-icons-png.flaticon.com/128/8093/8093687.png";

function MedicinesPage() {
  const medicines = [
    { name: "Paracetamol", price: "₹50" },
    { name: "Ibuprofen", price: "₹80" },
    { name: "Amoxicillin", price: "₹120" },
    { name: "Cetirizine", price: "₹40" },
    { name: "Dolo 650", price: "₹30" },
    { name: "Metformin", price: "₹90" },
    { name: "Aspirin", price: "₹60" },
    { name: "Cough Syrup", price: "₹70" },
    { name: "Vitamin C", price: "₹45" },
    { name: "Antacid", price: "₹55" }
  ];

  return (
    <div className="medicines-container">
      <h1>Buy Medicines</h1>
      <div className="medicines-list">
        {medicines.map((med, index) => (
          <div key={index} className="medicine-box">
            <img src={capsuleIcon} alt="Capsule Icon" className="capsule-icon" />
            <div className="medicine-info">
              <span className="medicine-name">{med.name}</span>
              <span className="medicine-price">{med.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicinesPage;
