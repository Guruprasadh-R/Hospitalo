
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Ensure this file exists

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <h1>Welcome to Hospitalo</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
}

export default Home;
