import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome';
import LifecycleClassComponent from './component/lifecycleClassComponent';

function App() {
  return (
    <div className="App">
      <Welcome />
      <LifecycleClassComponent />
    </div>
  );
}

export default App;
