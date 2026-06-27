import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Login() {
  return <h2>Login Page</h2>;
}

function Register() {
  return <h2>Register Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

function AddExpense() {
  return <h2>Add Expense Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;