

const hospitals = [
  {
    name: "Apollo Hospital",
    address: "Greams Road, Chennai",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Apollo_Hospitals_Logo.svg",
  },
  {
    name: "Fortis Hospital",
    address: "Bannerghatta Road, Bengaluru",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Fortis_Hospital_Logo.svg",
  },
  {
    name: "AIIMS",
    address: "Ansari Nagar, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/AIIMS_Logo.svg",
  },
];

const Hospital = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hospitals Near You</h1>
      <div style={styles.hospitalList}>
        {hospitals.map((hospital, index) => (
          <div key={index} style={styles.card}>
            <img src={hospital.logo} alt={hospital.name} style={styles.logo} />
            <h2 style={styles.name}>{hospital.name}</h2>
            <p style={styles.address}>
              📍 {hospital.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  hospitalList: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },
  name: {
    fontSize: "20px",
    margin: "10px 0",
    color: "#007bff",
  },
  address: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Hospital;
