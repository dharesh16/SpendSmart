import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Dummy data for now - will come from Spring Boot API later
  const [totalIncome] = useState(5000);
  const [totalExpense] = useState(3200);
  const remainingBalance = totalIncome - totalExpense;

  const [expenses] = useState([
    { id: 1, description: 'Lunch at canteen', category: 'Food', date: '2024-06-08', amount: 120 },
    { id: 2, description: 'Bus ticket', category: 'Travel', date: '2024-06-07', amount: 50 },
    { id: 3, description: 'Electricity bill', category: 'Bills', date: '2024-06-06', amount: 800 },
  ]);

  const handleLogout = () => {
    navigate('/');
  };

  const categoryColors = {
    Food: { bg: '#ede9fe', text: '#6366f1' },
    Travel: { bg: '#d1fae5', text: '#10b981' },
    Bills: { bg: '#fef3c7', text: '#f59e0b' },
    Others: { bg: '#f3f4f6', text: '#6b7280' },
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
          <span style={{ color: 'white', fontWeight: '500' }}>Dashboard</span>
          <Link to="/add-expense" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Add Expense</Link>
          <span onClick={handleLogout} style={{ color: '#f87171', cursor: 'pointer' }}>Logout</span>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h5 style={{ color: '#1a1f36', fontWeight: '600', marginBottom: '16px' }}>👋 Welcome back!</h5>

        {/* Summary Cards */}
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '12px',
              padding: '16px',
              color: 'white'
            }}>
              <div style={{ fontSize: '11px', opacity: '0.85', textTransform: 'uppercase' }}>Total Income</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>₹{totalIncome.toLocaleString()}</div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              borderRadius: '12px',
              padding: '16px',
              color: 'white'
            }}>
              <div style={{ fontSize: '11px', opacity: '0.85', textTransform: 'uppercase' }}>Total Expense</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>₹{totalExpense.toLocaleString()}</div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '12px',
              padding: '16px',
              color: 'white'
            }}>
              <div style={{ fontSize: '11px', opacity: '0.85', textTransform: 'uppercase' }}>Remaining Balance</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>₹{remainingBalance.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Recent Expenses Table */}
        <div className="card" style={{ borderRadius: '12px', border: '0.5px solid #e5e7eb' }}>
          <div style={{
            padding: '12px 16px',
            borderBottom: '0.5px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1f36' }}>Recent Expenses</span>
            <Link to="/add-expense" className="btn btn-sm" style={{
              background: '#6366f1', color: 'white', fontSize: '12px'
            }}>+ Add Expense</Link>
          </div>
          <table className="table mb-0">
            <thead>
              <tr style={{ fontSize: '11px', color: '#6b7280' }}>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id} style={{ fontSize: '13px' }}>
                  <td>{exp.description}</td>
                  <td>
                    <span style={{
                      background: categoryColors[exp.category].bg,
                      color: categoryColors[exp.category].text,
                      padding: '2px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {exp.category}
                    </span>
                  </td>
                  <td style={{ color: '#6b7280' }}>{exp.date}</td>
                  <td style={{ color: '#ef4444', fontWeight: '500' }}>₹{exp.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;