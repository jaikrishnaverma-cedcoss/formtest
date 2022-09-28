import './BaseUI.css'
import './App.css';
import Forms from './container/Forms';
import { useState } from 'react';

function App() {
  const [data,setData]=useState([])
  return (
    <div className="App">
      <header className="App-header">
       <Forms />
      </header>
    </div>
  );
}

export default App;
