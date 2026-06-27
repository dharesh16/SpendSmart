import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    // For now, just navigate to login
    // Later this will call the Spring Boot register API
    console.log('Register attempt:', name, email, password);
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1f36, #2d3561)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="card shadow-lg p-4" style={{ width: '380px', borderRadius: '16px' }}>
        <div className="text-center mb-3">
          <h2 style={{ color: '#1a1f36', fontWeight: '700' }}>💰 SpendSmart</h2>
          <p className="text-muted" style={{ fontSize: '13px' }}>Create your account</p>
        </div>

        {error && <div className="alert alert-danger py-2" style={{ fontSize: '13px' }}>{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '13px', fontWeight: '500' }}>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '13px', fontWeight: '500' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="yourname@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '13px', fontWeight: '500' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label" style={{ fontSize: '13px', fontWeight: '500' }}>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn w-100 mb-3" style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            fontWeight: '600',
            padding: '10px'
          }}>
            Create My Account
          </button>

          <p className="text-center" style={{ fontSize: '13px' }}>
            Already have an account? <Link to="/" style={{ color: '#6366f1', fontWeight: '500' }}>Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;