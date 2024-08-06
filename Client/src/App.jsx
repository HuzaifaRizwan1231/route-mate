import "/src/assets/css/App.css";
import PassengerLogin from "./pages/PassengerLogin";

import PassengerSignup from "./pages/PassengerSignup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/Profile";
import PassengerHome from "./pages/PassengerHome";
import SearchListing from "./pages/SearchListing";
import PassengerPrivateRoutes from "./components/PrivateRoutes/PassengerPrivateRoutes";
import DriverHome from "./pages/DriverHome";
import DriverPrivateRoutes from "./components/PrivateRoutes/DriverPrivateRoutes";
import CreateListing from "./pages/CreateListing";
import ListingDetail from "./components/ListingDetail";
import DriverSignup from "./pages/DriverSignup";
import DriverLogin from "./pages/DriverLogin";
import DriverCurrentListings from "./pages/DriverCurrentListings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/driver/signup" element={<DriverSignup />} />
          <Route path="/driver/signin" element={<DriverLogin />} />
          <Route path="/passenger/signup" element={<PassengerSignup />} />
          <Route path="/passenger/signin" element={<PassengerLogin />} />
          <Route path="/" element={<Navigate to="/passenger/home" />} />

          {/* Passenger Routes */}
          <Route element={<PassengerPrivateRoutes />}>
            <Route path="/passenger/home" element={<PassengerHome />} />
            <Route
              path="/passenger/searchListing"
              element={<SearchListing />}
            />
            <Route
              path="/passenger/searchListing/:listingId"
              element={
                <>
                  <ListingDetail /> <SearchListing />
                </>
              }
            />
          </Route>

          {/* Driver Routes */}
          <Route element={<DriverPrivateRoutes />}>
            <Route path="/driver/home" element={<DriverHome />} />
            <Route path="/driver/createListing" element={<CreateListing />} />
            <Route
              path="/driver/currentListings"
              element={<DriverCurrentListings />}
            />
          </Route>

          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
