import "/src/assets/css/App.css";
import PassengerLogin from "./pages/PassengerLogin";

import PassengerSignup from "./pages/PassengerSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import PassengerHome from "./pages/PassengerHome";
import SearchListing from "./pages/SearchListing";
import ListingDetail from "./components/ListingDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route element={<>Hello</>} /> */}
          <Route path="/passenger/home" element={<PassengerHome />} />
          <Route path="/passenger/signup" element={<PassengerSignup />} />
          <Route path="/passenger/signin" element={<PassengerLogin />} />
          <Route path="/passenger/searchListing" element={<SearchListing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
