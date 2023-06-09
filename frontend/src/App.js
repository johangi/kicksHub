import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// Pages and Components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Veileder from './pages/Veileder';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import AdminGuide from './pages/AdminGuide';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/adminguide"
              element={user && user.admin ? (<AdminGuide />) : (<Navigate to="/" replace />)}
            />
            <Route
              path="/admin"
              element={user && user.admin ? (<Admin />) : (<Navigate to="/" replace />)}
            />
            <Route
              path="/veileder"
              element={user && user.admin ? (<Veileder />) : (<Navigate to="/" replace />)}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
