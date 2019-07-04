import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeListAsyncAwait from './components/EmployeeListAsyncAwait';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeListAsyncAwait/>
	  </header>
    </div>
  );
}

export default App;
