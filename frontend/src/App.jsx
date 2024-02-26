import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import SignUp from './pages/signup/signup';
import Login from './pages/login/login'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path = "/signup"
          element = {<SignUp />}
        />
        <Route 
          path = "/login"
          element = {<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
