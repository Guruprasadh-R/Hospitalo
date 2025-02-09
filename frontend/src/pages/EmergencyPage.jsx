import "../styles/EmergencyPage.css"; // Import CSS for styling

function EmergencyPage() {
  const emergencyContacts = [
    {
      category: "Ambulance",
      contacts: [
        { name: "National Ambulance", number: "102" },
        { name: "Private Ambulance", number: "+91 98765 43210" },
      ],
    },
    {
      category: "Hospitals",
      contacts: [
        { name: "AIIMS Hospital", number: "+91 11234 56789" },
        { name: "Apollo Hospital", number: "+91 99887 66554" },
        { name: "Fortis Hospital", number: "+91 77665 55443" },
      ],
    },
  ];

  return (
    <div className="emergency-container">
      <h1>Emergency Contacts</h1>
      <div className="emergency-sections">
        {emergencyContacts.map((section, index) => (
          <div key={index} className="emergency-box">
            <h2>{section.category}</h2>
            <ul>
              {section.contacts.map((contact, i) => (
                <li key={i}>
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-number">{contact.number}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyPage;