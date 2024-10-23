import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import Login from './components/Login';
import Register from './components/Register'; // Add Register component
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} /> {/* Add Register Route */}
          <Route path="/admin" element={<PrivateRoute role="admin" component={AdminPage} />} />
          <Route path="/employee" element={<PrivateRoute role="employee" component={EmployeePage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;