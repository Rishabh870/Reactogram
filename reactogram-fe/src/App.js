import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='app-bg'>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/post' element={<PostOverview />}></Route>
          <Route exact path='/myprofile' element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
