
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";


//nav component
function Nav() {
  return (
    <nav>
      <ul className="nav-links" >
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/signin">Sign In</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link> </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />

        {/* private routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
