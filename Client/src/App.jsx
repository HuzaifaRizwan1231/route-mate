import "/src/assets/css/App.css";
import PassengerLogin from "./pages/PassengerLogin";
import Home from "./pages/Home";

import PassengerSignup from "./pages/PassengerSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passenger/signup" element={<PassengerSignup />} />
          <Route path="/passenger/login" element={<PassengerLogin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
