import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <Header />
      {user === '' ? (<SignIn user={user} setUser={setUser}/>) : (<Home user={user}/>)}
    </div>
  );
}

export default App;
