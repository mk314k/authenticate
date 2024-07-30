import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <main className='flex vertical'>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
