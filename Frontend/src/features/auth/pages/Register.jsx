import React,{ useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss";
import { useAuth } from '../hooks/useAuth'

const Register = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const {loading,handleRegister} = useAuth()
  
  // const handleSubmit = async (e) =>{
  //   e.preventDefault()
  //   await handleRegister({username,email,password})
  //   navigate("/")
  // }

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username || !email || !password) {
    alert("All fields are required");
    return;
  }

  const res = await handleRegister({ username, email, password });

  if (res?.success) {
    navigate("/");
  } else {
    alert("Registration failed");
  }
}

  if (loading) {
    return <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Loading...</h1></main>;
  }

   return (
    <main>
      <div className="auth-left">
        <div className="brand">
          <div className="brand-icon">★</div>
          <span className="brand-name">Interview Matrix</span>
        </div>
 
        <div className="left-content">
          <h1 className="left-heading">
            Start your journey to<br />your <span className="accent">next role.</span>
          </h1>
          <p className="left-description">
            Your AI-powered interview prep, job insights &amp; career growth partner.
          </p>
          <ul className="feature-list">
            <li>
              <span className="check-icon">✓</span>
              Free to get started
            </li>
            <li>
              <span className="check-icon">✓</span>
              AI-generated personalised study plan
            </li>
            <li>
              <span className="check-icon">✓</span>
              Skill gap analysis on every application
            </li>
          </ul>
        </div>
      </div>
 
      <div className="auth-right">
        <div className="form-container">
          <h2 className="form-heading">Create your account</h2>
          <p className="form-subheading">Join thousands of candidates acing their interviews</p>
 
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              {/* <div className="input-wrapper"> */}
                {/* <span className="input-icon">👤</span> */}
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                />
              {/* </div> */}
            </div>
 
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              {/* <div className="input-wrapper"> */}
                {/* <span className="input-icon">✉</span> */}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                />
              {/* </div> */}
            </div>
 
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                {/* <span className="input-icon">🔒</span> */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                />

                <button
                  type="button"
                  className="eye-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>

              </div>
            </div>
 
            <div className="form-actions">
              <button type="submit" className="button primary-button">
                Register →
              </button>
            </div>
          </form>
 
          <p className="form-footer">
            Already have an account? <Link to="/login">Login →</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
 
export default Register;