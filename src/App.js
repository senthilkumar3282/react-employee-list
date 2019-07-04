import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeList/>
	  </header>
    </div>
  );
}

export default App;
