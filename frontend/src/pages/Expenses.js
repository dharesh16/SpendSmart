import { useState } from 'react';
import { Link } from 'react-router-dom';

function Expenses() {

  // Dummy data for now - will come from Spring Boot API later
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Lunch at canteen', category: 'Food', date: '2024-06-08', amount: 120 },
    { id: 2, description: 'Bus ticket', category: 'Travel', date: '2024-06-07', amount: 50 },
    { id: 3, description: 'Electricity bill', category: 'Bills', date: '2024-06-06', amount: 800 },
    { id: 4, description: 'Movie ticket', category: 'Others', date: '2024-05-28', amount: 250 },
    { id: 5, description: 'Groceries', category: 'Food', date: '2024-05-20', amount: 600 },
    { id: 6, description: 'Auto fare', category: 'Travel', date: '2024-05-15', amount: 80 },
  ]);

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [monthFilter, setMonthFilter] = useState('All');

  const categoryColors = {
    Food: { bg: '#ede9fe', text: '#6366f1' },
    Travel: { bg: '#d1fae5', text: '#10b981' },
    Bills: { bg: '#fef3c7', text: '#f59e0b' },
    Others: { bg: '#f3f4f6', text: '#6b7280' },
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  // Get unique months from the data for the dropdown
  const months = ['All', ...new Set(expenses.map((exp) => exp.date.substring(0, 7)))];

  // Apply both filters together
  const filteredExpenses = expenses.filter((exp) => {
    const categoryMatch = categoryFilter === 'All' || exp.category === categoryFilter;
    const monthMatch = monthFilter === 'All' || exp.date.substring(0, 7) === monthFilter;
    return categoryMatch && monthMatch;
  });

  const totalFiltered = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);

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
          <span style={{ color: 'white', fontWeight: '500' }}>Expenses</span>
          <Link to="/add-expense" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Add Expense</Link>
          <Link to="/" style={{ color: '#f87171', textDecoration: 'none' }}>Logout</Link>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h5 style={{ color: '#1a1f36', fontWeight: '600', marginBottom: '16px' }}>📋 All Expenses</h5>

        {/* Filters */}
        <div className="card p-3 mb-3" style={{ borderRadius: '12px', border: '0.5px solid #e5e7eb' }}>
          <div className="row">
            <div className="col-md-4 mb-2">
              <label style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: '#6b7280' }}>Filter by Category</label>
              <select
                className="form-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Bills">Bills</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              <label style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: '#6b7280' }}>Filter by Month</label>
              <select
                className="form-select"
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
              >
                {months.map((m) => (
                  <option key={m} value={m}>{m === 'All' ? 'All Months' : m}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-2 d-flex align-items-end">
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                Showing <strong>{filteredExpenses.length}</strong> expenses — Total: <strong style={{ color: '#ef4444' }}>₹{totalFiltered}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Expenses Table */}
        <div className="card" style={{ borderRadius: '12px', border: '0.5px solid #e5e7eb' }}>
          <table className="table mb-0">
            <thead>
              <tr style={{ fontSize: '11px', color: '#6b7280' }}>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4" style={{ fontSize: '13px' }}>
                    No expenses found for this filter
                  </td>
                </tr>
              )}
              {filteredExpenses.map((exp) => (
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
                  <td>
                    <button
                      onClick={() => handleDelete(exp.id)}
                      className="btn btn-sm"
                      style={{ background: '#fef2f2', color: '#ef4444', fontSize: '11px' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Expenses;