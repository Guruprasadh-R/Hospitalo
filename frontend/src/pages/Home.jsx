import { Link } from "react-router-dom";
import "../styles/Home.css"; // Make sure this file exists

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">HOSPITALO</div>
        <ul className="nav-links">
          <li><Link to="/personal-care">Personal Care</Link></li>
          <li><Link to="/doctors">Specialized Doctors</Link></li>
          <li><Link to="/records">Health Records</Link></li>
          <li><Link to="/lab-test">Lab Test</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn">LOG IN</Link>
          <Link to="/signup" className="btn">SIGN UP</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Discover the health services that you need...</h1>
        <input type="text" placeholder="Search doctors, medicine, hospitals..." />
      </section>

      {/* Services Section */}
      <section className="services">
        <Link to="/hospitals" className="service-btn hospital">🏥 Hospital</Link>
        <Link to="/emergency" className="service-btn emergency">🚑 Emergency</Link>
        <Link to="/appointment" className="service-btn appointment">📅 Appointment</Link>
        <Link to="/medicines" className="service-btn buy-medicine">💊 Buy Medicine</Link> {/* ✅ Updated Link */}
      </section>

      {/* Blog Section */}
      <section className="blogs">
        <h2>Articles and Blogs to Know</h2>
        <div className="blog-cards">
          <div className="blog-card">World Health Day</div>
          <div className="blog-card">World Heart Day</div>
          <div className="blog-card">World AIDS Day</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Hospitalo</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-section">
          <h3>For Patients</h3>
          <p>Search for Doctors</p>
          <p>Search for Clinics</p>
          <p>Read Health Articles</p>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
