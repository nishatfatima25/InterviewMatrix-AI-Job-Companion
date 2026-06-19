import React,{useState} from 'react';
import { useNavigate, Link} from 'react-router';
import "../auth.form.scss";
import { useAuth } from '../hooks/useAuth';


const Login = () => {

  const {loading,handleLogin} = useAuth()
  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = async (e)=>{
  //   e.preventDefault()
  //   await handleLogin({email,password})
  //   navigate('/')
  // }

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Email and password are required");
    return;
  }

  const res = await handleLogin({ email, password });

  if (res?.success) {
    navigate('/');
  } else {
    alert("Invalid credentials");
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
            Land your dream job<br />with <span className="accent">AI.</span>
          </h1>
          <p className="left-description">
            Your AI-powered interview prep, job insights &amp; career growth partner. Let our AI build your winning strategy.
          </p>
          <ul className="feature-list">
            <li>
              <span className="check-icon">✓</span>
              Tailored interview question bank
            </li>
            <li>
              <span className="check-icon">✓</span>
              Resume-to-job match scoring
            </li>
            <li>
              <span className="check-icon">✓</span>
              Day-by-day preparation roadmap
            </li>
          </ul>
        </div>
 
        <div className="left-footer">
          &nbsp;•&nbsp; AI-Powered Strategy Generation  
        </div>
      </div>
 
      <div className="auth-right">
        <div className="form-container">
          <h2 className="form-heading">Welcome back</h2>
          <p className="form-subheading">Login to continue your interview prep journey</p>
 
          <form onSubmit={handleSubmit}>
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
              <div className="forgot-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <div className="input-wrapper">
                {/* <span className="input-icon">🔒</span> */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
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
                Login →
              </button>
            </div>
          </form>
 
          <p className="form-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
 
export default Login;

