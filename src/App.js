import React from 'react';
import './App.css'
import SignIn from  './components/SignIn/SignIn';
import Catchphrse from './components/Catchphrase/Catchphrase';
function App() {
  return (
    <div className="App">
      <Catchphrse/>
      <SignIn className="sign-in"/>
    </div>
  );
}

export default App;
