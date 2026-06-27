import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddExpense() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const categories = [
    { name: 'Food', emoji: '🍔', bg: '#ede9fe', text: '#6366f1' },
    { name: 'Travel', emoji: '🚌', bg: '#d1fae5', text: '#10b981' },
    { name: 'Bills', emoji: '💡', bg: '#fef3c7', text: '#f59e0b' },
    { name: 'Others', emoji: '📦', bg: '#f3f4f6', text: '#6b7280' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !date) {
      setError('Please fill in amount and date');
      return;
    }

    if (amount <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    setError('');
    // For now just log it - later this will call the Spring Boot API
    console.log('New Expense:', { amount, category, date, description });
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6' }}>

      {/* Navbar */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1f36, #2d3561)',
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>💰 SpendSmart</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/dashboard" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Dashboard</Link>
<Link to="/expenses" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Expenses</Link>
<span style={{ color: 'white', fontWeight: '500' }}>Add Expense</span>
          <Link to="/" style={{ color: '#f87171', textDecoration: 'none' }}>Logout</Link>
        </div>
      </div>

      <div style={{ padding: '30px 20px', display: 'flex', justifyContent: 'center' }}>
        <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '460px', borderRadius: '16px' }}>
          <h5 style={{ fontWeight: '700', color: '#1a1f36', marginBottom: '4px' }}>➕ Add New Expense</h5>
          <p className="text-muted" style={{ fontSize: '12px', marginBottom: '20px' }}>
            Fill in the details below to record your expense
          </p>

          {error && <div className="alert alert-danger py-2" style={{ fontSize: '13px' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="250.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>Category</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    onClick={() => setCategory(cat.name)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      background: cat.bg,
                      color: cat.text,
                      border: category === cat.name ? `2px solid ${cat.text}` : '2px solid transparent'
                    }}
                  >
                    {cat.emoji} {cat.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="e.g. Lunch at college canteen"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn" style={{
                flex: 2,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                fontWeight: '600',
                padding: '10px'
              }}>
                ✅ Add Expense
              </button>
              <Link to="/dashboard" className="btn" style={{
                flex: 1,
                border: '1.5px solid #e5e7eb',
                color: '#6b7280',
                fontWeight: '500',
                padding: '10px',
                textAlign: 'center'
              }}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;