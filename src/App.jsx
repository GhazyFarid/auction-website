import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./dashboard/screens/ProfilePage";
import DashboardRoutes from "./dashboard";
import LandingPageRoutes from "./landingPage/index";
import AuthRoutes from "./auth";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Landing pages */}
          <Route path="/*" element={<LandingPageRoutes />} />

          {/* Auth */}
          <Route path="/auth/*" element={<AuthRoutes />} />

          {/* Dashboard */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
