import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

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
      </Routes>
    </BrowserRouter>
  );
}