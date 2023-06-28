import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.userReducer);

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
        navigate('/post');
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      }
    }, []);

    return (
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/post' element={<PostOverview />}></Route>
        <Route exact path='/myprofile' element={<Profile />}></Route>
      </Routes>
    );
  }
  return (
    <div className='app-bg'>
      <Router>
        <Navbar />
        <DynamicRouting />
      </Router>
    </div>
  );
}

export default App;
