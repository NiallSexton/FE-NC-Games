import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Profile from './components/Profile'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  const [user, setUser] = useState('');
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
      {user === '' ? (
      <Route
      path='/'
      element={<SignIn user={user} setUser={setUser}/>}
      />
      ) : (
        <Route path='/' element={<Home user={user}/>} />
        )}
        <Route path='/reviews/category' element={<Home user={user}/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
