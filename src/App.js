import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SingleReview from './components/SingleReview';
import Profile from './components/Profile';
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState('');
  return (
    <BrowserRouter>
    <Header user={user} />
    <div className="App">
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
        <Route path='/profile' element={<Profile/>}/>
        <Route path = '/reviews/:review_id' element={<SingleReview user={user}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
