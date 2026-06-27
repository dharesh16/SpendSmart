import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    // For now, just navigate to dashboard
    // Later this will call the Spring Boot login API
    console.log('Login attempt:', email, password);
    navigate('/dashboard');
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
          <p className="text-muted" style={{ fontSize: '13px' }}>Track smart, spend wise</p>
        </div>

        {error && <div className="alert alert-danger py-2" style={{ fontSize: '13px' }}>{error}</div>}

        <form onSubmit={handleLogin}>
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

          <div className="mb-4">
            <label className="form-label" style={{ fontSize: '13px', fontWeight: '500' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn w-100 mb-3" style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            fontWeight: '600',
            padding: '10px'
          }}>
            Login to SpendSmart
          </button>

          <p className="text-center" style={{ fontSize: '13px' }}>
            Don't have an account? <Link to="/register" style={{ color: '#6366f1', fontWeight: '500' }}>Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;