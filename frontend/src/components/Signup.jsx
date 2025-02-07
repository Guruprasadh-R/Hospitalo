// src/components/Signup.jsx


function Signup() {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
