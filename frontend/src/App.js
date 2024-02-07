<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
=======
import "./App.css";

function App() {
  return <div className="App"></div>;
>>>>>>> 980f6fc5d4204519b85982bb71db15a92115e45b
}
