import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import { Quiz } from './components/Quiz/Quiz.js';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
