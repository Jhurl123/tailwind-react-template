import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <Link to="/home">Home</Link>
      </header>
    </div>
  );
}
