import React from 'react';
import './App.css';
import Profile from './profile/Profie';
import papillon from './papillon.jpg';


function App() {
  const data = {
    fullName: 8,
    bio:'bonjour',
    profession:'marahbe'
   
  }
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
      <Profile alertMyInput={alertMyInput} fullName={data.fullName}  bio={data.bio} profession={data.profession}>{papillon}</Profile>
      

    </div>
  );
}

export default App;
